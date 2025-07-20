// api/askGroq.js

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { crop, area, location } = req.body;

  if (!crop || !area || !location) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const systemPrompt = `
You are an expert agricultural assistant.

Return only **Markdown-formatted advice** for a farmer, including:

- Fertilizer & pesticide names
- Quantity per acre (kg/ml)
- Application methods & timing
- Purpose
- Safety or preparation tips

Use proper Markdown syntax:
- Headings (\`##\`, \`###\`)
- Numbered lists
- GitHub-style tables

Do **not** include any extra notes, code blocks, or explanations. Only output Markdown text.
`;

    const userPrompt = `I am a farmer. I grow ${crop} on ${area} acres of land in ${location}. I may use fertilizers and pesticides. Please provide detailed advice.`;

    const completion = await openai.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 1024,
    });

    const reply = completion.choices[0].message.content;

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error in /api/askGroq:", error);
    res.status(500).json({ error: "Failed to get AI response" });
  }
}
