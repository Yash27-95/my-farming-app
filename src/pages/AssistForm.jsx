import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useAI } from '../context/AIContext';

const AssistForm = () => {
  const [form, setForm] = useState({ crop: '', area: '', location: ''});
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const { recommendation, setRecommendation } = useAI();
  const result = React.useRef(null)

  React.useEffect(() => {
    if (recommendation && !response) {
      setResponse(recommendation);
    }
  }, [recommendation]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    const { crop, area, location } = form;

    if (!crop || !area || !location) {
      setLoading(false);
      setResponse({ error: "Please fill in all required fields." });
      return;
    }

    try {
      const res = await fetch("/api/askGroq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ crop, area, location }),
      });
      const data = await res.json();
      console.log(data)

      if (res.ok) {
        setResponse(data.reply);
        setRecommendation(data.reply)

        setTimeout(() => {
          result.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setResponse({ error: data.error || "Something went wrong." });
      }
    } catch (err) {
      console.error("❌ Parsing error:", err);
      setResponse({ error: "⚠️ Failed to parse AI response. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ai-section" style={{ maxWidth: 720, margin: 'auto'}}>
      <h2>🌿 AI-Assisted Fertilizer & Pesticide Advisor</h2>

      <form onSubmit={handleSubmit} className="ai-form" style={{ display: 'grid', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          name="crop"
          placeholder="Crop Type (e.g. Sugarcane)"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="area"
          placeholder="Land Area (e.g. 2 acres)"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location (e.g. Mandya)"
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Get Recommendations"}
        </button>
      </form>

      {response?.error && (
        <div style={{ color: "red", marginTop: "1rem" }}>
          <strong>Error:</strong> {response.error}
        </div>
      )}

      {loading && (
        <div style={{ textAlign: 'center', marginTop: '1rem', color: '#666' }}>
          <p>🧠 Thinking... Generating recommendations...</p>
        </div>
      )}


      {response && (
        <div
          className="user-text"
          style={{
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "1.5em",
            marginTop: "2em",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
          ref={result}
        >
          <h3 style={{ color: "#256029", marginBottom: "1rem" }}>
            👩‍🌾 Recommendation for Farmer
          </h3>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {response}
          </ReactMarkdown>
        </div>
      )}
    </section>
  );
};

export default AssistForm;
