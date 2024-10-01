# Dissertation

# Prompt Engineering Tool

This is a front-end interface for a prompt engineering tool, created as part of a final year dissertation project. The website allows users to input questions and receive feedback on how to structure their prompts for improved effectiveness. This version includes a basic landing page that is integrated with a ChatGPT API to analyze user input.

## Features

- **Sleek Landing Page**: A modern and responsive design for users to input their questions.
- **ChatGPT API Integration**: Allows the analysis of prompts and provides effectiveness scores and suggestions.
- **Responsive Design**: The website is optimized for both desktop and mobile devices.

## Technologies Used

- **HTML5**: Structure of the website.
- **CSS3**: Styling for the website.
- **JavaScript**: For API integration (if applicable).
- **ChatGPT API**: For analyzing user prompts (setup separately).

## Project Structure

├── index.html # Main landing page ├── styles.css # CSS for styling the landing page ├── README.md # Project documentation

## Setup and Usage

### Prerequisites

To run this project locally, you will need:

- A web browser to open `index.html`.
- Access to the ChatGPT API (if integrated).

### Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/prompt-engineering-tool.git

2. **Open the Project**
```
cd prompt-engineering-tool
open index.html
```

### API Integration
```

document.getElementById('promptForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const userInput = document.getElementById('userPrompt').value;
    const response = await fetch('/api/analyze-prompt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: userInput })
    });
    const result = await response.json();
    console.log(result); // Handle API response
});
```

### Licenses and Explanation:
- **Project Description**: Summarizes the purpose of the website.
- **Features**: Lists the key features of the tool.
- **Technologies Used**: Details the technologies employed for building the project.
- **Setup Instructions**: Explains how to clone and run the project.
- **API Integration**: Provides a hint on how to integrate with the ChatGPT API.
- **Contributing**: Encourages contributions to the project.
- **License**: States the licensing terms for the project.

Let me know if you want any adjustments to this!

