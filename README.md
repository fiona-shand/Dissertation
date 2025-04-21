# My Tailwind Project

This project is a Next.js-based application for refining prompts and generating responses using different prompt engineering techniques. It integrates with Firebase for authentication and data storage and uses OpenAI’s GPT-3.5 API to process prompt requests, analyze prompt effectiveness, and generate LLM responses.

## Features

- **User Authentication:**  
  Users can register, log in, manage their profiles, update personal information, and change their passwords.
  
- **Prompt Engineering:**  
  Allows users to input prompts and receive improved versions using different techniques:
  - Chain of Thought prompting
  - Few-Shot Learning
  - Role Prompting

- **Analytics & History:**  
  View effectiveness scores and historical prompt and response data. Visualizations (e.g., bar and line charts) provide insights into performance trends over time.

- **Feedback Mechanism:**  
  Users can rate and comment on the responses they receive to help improve the tool.

- **Responsive and Accessible UI:**  
  Built using Tailwind CSS for styling and includes accessibility features and a help/support section.

## Technology Used

- **Frontend:**  
  - [Next.js](https://nextjs.org)
  - React
  - Tailwind CSS

- **Backend & API:**  
  - Express.js (for API routes in [api/prompts.js](api/prompts.js))
  - OpenAI’s GPT-3.5 API
  - Firebase Authentication and Realtime Database (see [firebaseConfig.js](firebaseConfig.js))

- **Charts & Visualization:**  
  - Chart.js together with react-chartjs-2
  - react-circular-progressbar

- **Build Tools & Linting:**  
  - TypeScript (see [tsconfig.json](tsconfig.json))
  - ESLint ([.eslintrc.json](.eslintrc.json))
  - PostCSS

## Project Structure

```
my-tailwind-project/
├── api/
│   └── prompts.js         # Contains API endpoints for prompt analysis, playground queries and LLM responses
├── app/
│   ├── change-password/   # Change Password page
│   ├── edit-profile/      # Edit Profile page
│   ├── feedback/          # Feedback page
│   ├── globals.css        # Global styles with Tailwind CSS
│   ├── homepage/          # Homepage displaying prompt suggestions and analytics
│   ├── history/           # Conversation history page
│   ├── login/             # User login page
│   ├── my-information/    # Page for updating user information
│   ├── profile/           # User profile page
│   ├── register/          # User registration page
│   ├── practice/          # Practice page for testing prompt engineering skills
│   ├── helpButton.tsx     # Help button component
│   ├── copyButton.tsx     # Copy button component for copying responses
│   └── layout.tsx         # Main layout with navigation
├── barChart.tsx           # Bar chart component for visual analytics
├── firebaseConfig.js      # Firebase configuration and helper functions
├── next.config.mjs        # Next.js configuration, including redirects
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
└── .gitignore             # Git ignore file
```

## Setup and Usage

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-tailwind-project
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**  
   Copy `.env.example` to `.env` and fill in your configuration details:
   - Firebase API keys and identifiers
   - `OPENAI_API_KEY` for OpenAI access

4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

5. **Run the API Server:**  
   You can run the Express API (see [api/prompts.js](api/prompts.js)) via:

   ```bash
   node api/prompts.js
   ```

   Ensure the API server is running on the expected port (default is 3000).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Additional Notes

- **GDPR Compliance:**  
  The project includes several measures to comply with GDPR standards:
  - Data Minimization: Only essential user data is collected.
  - Secure Data Transmission: All data is transmitted using HTTPS.
  - Secure Storage: Sensitive data is encrypted, salted, and hashed where necessary.
  - User Rights: Users can update, export, or delete their personal information in compliance with GDPR regulations.

- **Contributions:**  
  Contributions and feedback are welcome. Please open a pull request or raise an issue if you have any improvements or bug fixes.

- **Learn More:**  
  For more information on Next.js, Tailwind CSS, Firebase, and OpenAI API integration, refer to the corresponding documentation:
  - [Next.js Documentation](https://nextjs.org/docs)
  - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
  - [Firebase Documentation](https://firebase.google.com/docs)
  - [OpenAI API Documentation](https://beta.openai.com/docs)

Happy coding!

