
# 🌾 My Farming Assistant – Sri Shankar Traders

An AI-powered farming assistant web app developed for **Sri Shankar Traders**, a trusted agricultural input supplier based in **Kesthur, Maddur, India**. This tool provides personalized **fertilizer and pesticide recommendations** to help farmers make informed decisions based on their **crop**, **land area**, **location**, and **season**.

---

## 🏢 About Sri Shankar Traders

Operating since 1980, Sri Shankar Traders specializes in the distribution of high-quality fertilizers, pesticides, and farm inputs. This digital solution enhances our services by combining agricultural expertise with AI.

---

## 🚀 Features

- 🤖 **AI Integration** using Groq’s LLM API
- 📄 Renders rich responses with **ReactMarkdown**
- 📊 Easy-to-read tables and markdown formatting
- 🌱 Form-based inputs: crop, land area, location, season
- 🔁 Routing with **React Router**
- ⚡ Hosted on **Vercel** with **serverless functions**
- 🧠 Uses `.env.local` for secure API key handling

---

## 🧠 How It Works

1. Farmers enter their crop details.
2. The app sends the data to a serverless API using **Groq AI**.
3. AI returns fertilizer and pesticide suggestions, dosage, timing, and safety tips in markdown format.
4. Output is rendered beautifully using tables and formatted text.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Routing**: React Router
- **Markdown Rendering**: ReactMarkdown + Remark GFM
- **AI API**: Groq (OpenAI-compatible)
- **Deployment**: Vercel
- **Static Hosting**: GitHub
- **CI/CD**: Vercel auto-deploy from GitHub

---

## 📁 Folder Structure

```

my-farming-app/
├── api/
│   └── askGroq.js          # Vercel serverless function (outside src)
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Layout.jsx
│   ├── context/
│   │   └── AIContext.js
│   ├── pages/
│   │   ├── AssistForm.jsx  # Main AI interface
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env.local              # Contains GROQ\_API\_KEY (ignored by Git)
├── vite.config.js
└── README.md

````

---

## 🌐 Live Demo

🔗 [my-farming-app-rose.vercel.app](https://my-farming-app-rose.vercel.app)

---

## 🔐 Environment Setup (Local Testing)

1. Clone the repo:

```bash
git clone https://github.com/Yash27-95/my-farming-app.git
cd my-farming-app
````

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` in the root directory:

```env
GROQ_API_KEY=your_actual_groq_api_key_here
```

❗️ *Never commit `.env.local`. It’s already in `.gitignore`.*

4. Run the app:

```bash
npm run dev      # Start frontend
vercel dev       # Run serverless API locally
```

---

## 🙋‍♂️ Developer

**Yashwanth K S**
Frontend Developer & Creator
📍 Maddur, India
📧 [yashwanth.task27@gmail.com](mailto:yashwanth.task27@gmail.com)
🔗 [GitHub](https://github.com/Yash27-95) | [LinkedIn](https://www.linkedin.com/in/yashwanth-kesthur-shankar-91641b1a7)


