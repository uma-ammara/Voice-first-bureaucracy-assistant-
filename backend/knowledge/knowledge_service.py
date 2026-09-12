import json
import os
import numpy as np
import faiss
from sentence_transformers import SentenceTransformer

SERVICES_FILE = os.path.join(os.path.dirname(__file__), "services.json")

model = SentenceTransformer("paraphrase-multilingual-MiniLM-L12-v2")

def load_services():
    with open(SERVICES_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

services_data = load_services()

# Build REAL embeddings from each service's name + keywords + department
texts = [
    " ".join(sv.get("keywords", []) + [sv.get("service_name", ""), sv.get("department", "")])
    for sv in services_data
]
vectors = model.encode(texts, convert_to_numpy=True).astype("float32") if texts else np.zeros((0, 384), dtype="float32")

EMBEDDING_DIM = vectors.shape[1] if len(vectors) else 384
faiss_index = faiss.IndexFlatL2(EMBEDDING_DIM)
if len(vectors) > 0:
    faiss_index.add(vectors)

def find_service(query: str):
    if not services_data:
        return {}

    # Try exact keyword match first (fast, precise)
    query_lower = query.lower()
    for service in services_data:
        for keyword in service.get("keywords", []):
            if keyword.lower() in query_lower:
                return service

    # Fall back to REAL semantic search (not random vectors)
    query_vector = model.encode([query], convert_to_numpy=True).astype("float32")
    distances, indices = faiss_index.search(query_vector, 1)
    match_idx = indices[0][0]

    if 0 <= match_idx < len(services_data):
        return services_data[match_idx]

    return services_data[0]
