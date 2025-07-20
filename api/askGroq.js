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

  try {
    const completion = await openai.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: "You are an expert farming assistant." },
        { role: "user", content: `I grow ${crop} on ${area} acres in ${location}.` },
      ],
    });

    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
