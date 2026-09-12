import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.dirname(__file__)), ".env"))
# Note: ".." because this file is in backend/services/, and .env is in backend/

gemini_client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

SYSTEM_PROMPT = """
You are a government service information assistant who responds in Urdu.
You will be provided with verified data (CONTEXT) for an official government service.
You must construct your response strictly based ONLY on this CONTEXT data.
Do NOT invent or guess any fees, documents, steps, or websites.
If information is missing from CONTEXT, explicitly state to verify with the concerned office.

Your output must be strictly a JSON object with exactly these keys:
service, summary, documents, steps, fee, department, time_processing,
official_source, action_next, disclaimer.
"documents" and "steps" must be arrays of strings. All other values must be strings.
"""

def generate_answer(query: str, context_service: dict):
    user_prompt = f"""
    CONTEXT DATA:
    {json.dumps(context_service, ensure_ascii=False)}

    USER INQUIRY:
    {query}

    Please construct an accurate structured guidance response in Urdu based on CONTEXT.
    """

    response = gemini_client.models.generate_content(
        model="gemini-3.6-flash",
        contents=user_prompt,
        config={
            "system_instruction": SYSTEM_PROMPT,
            "response_mime_type": "application/json"
        }
    )

    try:
        return json.loads(response.text)
    except (json.JSONDecodeError, AttributeError, TypeError):
        return {
            "error": True,
            "message": "معذرت، جواب تیار نہیں ہو سکا۔ براہ کرم دوبارہ کوشش کریں۔",
        }