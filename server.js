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

// Route to handle API request
app.post('/api/analyze-prompt', async (req, res) => {
    const { prompt } = req.body;

    try {
        console.log("Prompt received:", prompt); // Log input prompt

        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: `Analyze this prompt for its effectiveness: "${prompt}" 
                     Suggest a better way to structure it for better results.`,
            max_tokens: 100,
        });

        console.log("API response:", response.data); // Log API response

        res.json({
            originalPrompt: prompt,
            suggestions: response.choices[0].text.trim(),
        });
    } catch (error) {
        console.error("API error:", error); // Log error
        res.status(500).json({ error: 'An error occurred during API request.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
