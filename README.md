# Voice-First Bureaucracy Assistant

**Voice-first guidance for government services.**

## Purpose

Many citizens in Pakistan struggle to navigate government procedures — they don't know which department to visit, what documents are required, or what the official fees are. This gap in accessible information turns simple tasks like getting a domicile certificate or registering an FIR into confusing, time-consuming ordeals.

The Voice-First Bureaucracy Assistant closes that gap. It's a lightweight, accessible web app that lets a citizen simply **ask** — by voice or by typing, in Urdu or English — and get a clear, structured, step-by-step answer grounded in verified information, instead of having to decode complicated official processes on their own.

## Vision

An AI-powered assistant that any citizen can talk to in their own words, and which responds by identifying:

- **Which service** they need (e.g., Domicile Certificate, FIR, License Renewal, Birth Certificate)
- **Where** to apply (e.g., E-Khidmat Center, Police Station, AC Office)
- **What documents** are required
- **How much** it costs
- **The complete step-by-step procedure**

The assistant is intentionally a **pure, stateless informational guide** — it does not require CNIC submission, NADRA verification, logins, or any personal data. It simply makes existing public information easier to find and understand, in the language and format that works best for the person asking.

## How It Works

1. The user speaks or types a question.
2. The query is matched against a curated knowledge base of government services.
3. An LLM (Gemini) turns the matched service data into a clear, structured answer — grounded strictly in that data, with no invented details.
4. The answer is shown as a structured card (documents, fees, steps, source) and can also be read aloud in Urdu.

## Status

Built as a 2-day hackathon MVP, covering voice input, Urdu/English support, and a small set of core government services as a proof of concept for a broader civic-tech guidance platform.
