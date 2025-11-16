
<div align="center">
  <h1 style="font-size: 3rem; font-weight: bold;">Tirthankar Dasgupta | Full-Stack Developer Portfolio</h1>
  <p>
    <strong>A modern, dynamic, and AI-enhanced personal portfolio built with Next.js and Genkit.</strong>
  </p>
  <p>
    <a href="#-key-features">Features</a> •
    <a href="#-technology-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-deployment">Deployment</a>
  </p>
</div>

![Portfolio Hero Section](https://image.thum.io/get/width/1200/crop/630/https://mrtg1b.vercel.app/)

---

## ✨ Key Features

This portfolio is a comprehensive showcase of my skills and projects, built with modern web technologies and a focus on user experience.

- **Dynamic Project Showcase**: Features a filterable and detailed view of all my projects, with live site previews and links to GitHub repositories.
- **AI-Powered Contact Form**: Utilizes **Google's Gemini model via Genkit** to generate intelligent, personalized auto-responses for contact form submissions.
- **Smooth Animations & Transitions**: Implemented with **Framer Motion** to create an engaging and fluid user experience.
- **Responsive & Modern UI**: Built with **Tailwind CSS** and **ShadCN UI** for a clean, professional, and fully responsive design that looks great on all devices.
- **Dark Mode**: Supports a sleek, eye-friendly dark mode, respecting system preferences.
- **Optimized Performance**: Leverages Next.js App Router, Server Components, and image optimization for fast load times.

## 🚀 Technology Stack

This project is built with a cutting-edge, full-stack technology set.

| Category          | Technology                                                                                                                                                                                                                                                                                                           |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**      | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)                  |
| **Styling**       | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) ![ShadCN UI](https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcn-ui&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) |
| **Generative AI** | ![Genkit](https://img.shields.io/badge/Genkit-6633FF?style=flat) ![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E44AD?style=flat&logo=google-gemini&logoColor=white)                                                                                                                            |
| **Deployment**    | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)                                                                                                                           |
| **Dev Tools**     | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)                                                                                                                       |

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or later)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MrTG1B/Portfolio-Website.git
    cd Portfolio-Website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add your Google AI (Gemini) API key.
    ```env
    GOOGLE_API_KEY="YOUR_GEMINI_API_KEY"
    ```

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The Genkit AI flows can be inspected and tested by running:

```bash
npm run genkit:dev
```

This will start the Genkit development UI, typically available at [http://localhost:4000](http://localhost:4000).

## 🚀 Deployment

This application is optimized for deployment on [Vercel](https://vercel.com/), the platform from the creators of Next.js.

- **Deploy Your Own**: Click the button below to deploy your own version of this portfolio.

  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMrTG1B%2FPortfolio-Website)

- **Environment Variables**: Ensure you add your `GOOGLE_API_KEY` to the environment variables in your Vercel project settings to enable the AI features.

---

<div align="center">
  <p>Developed with ❤️ by Tirthankar Dasgupta.</p>
</div>
