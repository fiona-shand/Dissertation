const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Instantiate OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// API route to handle prompt submission
app.post('/api/analyze-prompt', async (req, res) => {
    const { prompt } = req.body;

    try {
        console.log("Prompt received:", prompt); // Log input prompt

        // Using chat model, switch to /v1/chat/completions
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",  // Using chat-based model
            messages: [
                { role: "system", content: "You are a helpful assistant that improves the user's prompts." },
                { role: "user", content: `Analyze this prompt for its effectiveness: "${prompt}". Suggest a better way to structure it for better results.` }
            ],
            max_tokens: 100,
        });

        console.log("API response:", response.data); // Log API response

        res.json({
            originalPrompt: prompt,
            suggestions: response.choices[0].message.content.trim(),
        });
    } catch (error) {
        console.error("API error:", error); // Log error
        res.status(500).json({ error: 'An error occurred during API request.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
