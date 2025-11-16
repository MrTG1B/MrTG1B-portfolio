
export const projects = [
  {
    slug: "resuai",
    title: "ResuAI",
    description: "An AI-powered resume builder that helps users create professional resumes in minutes.",
    longDescription: "ResuAI is an intelligent resume-building application that leverages AI to simplify and accelerate the process of creating a professional resume. Users can input their details and let the AI assist in crafting compelling descriptions, suggesting skills, and formatting the document for a polished, modern look. It's designed to help job seekers stand out.",
    tags: ["AI", "Resume Builder", "Next.js", "TypeScript", "Vercel"],
    aiHint: "resume builder",
    image: "",
    imageFit: "cover" as const,
    achievements: [
      "Integrated a generative AI model to assist with content creation for resume sections.",
      "Developed an intuitive, multi-step form for easy data entry.",
      "Designed several professional resume templates for users to choose from.",
      "Ensured the application is fully responsive for use on both desktop and mobile devices."
    ],
    links: {
      live: "https://resuu-ai.vercel.app/",
      github: "https://github.com/MrTG1B/ResuAI"
    }
  },
  {
    slug: "dgen-technologies",
    title: "Dgen Technologies Pvt. Ltd.",
    description: "Developed the official corporate website for a startup, showcasing their services and expertise in the tech industry.",
    longDescription: "Developed the official corporate website for Dgen Technologies Pvt. Ltd., a startup specializing in cutting-edge technology solutions. The website serves as their primary online presence, detailing their services, showcasing their portfolio, and providing a clear point of contact for potential clients and partners. The site was built to be modern, responsive, and professional.",
    tags: ["Web Development", "Corporate Website", "Next.js", "React", "Startup"],
    aiHint: "corporate website technology",
    image: "",
    imageFit: "cover" as const,
    achievements: [
      "Designed and launched a fully responsive corporate website from scratch.",
      "Created a clean and professional UI to represent the company's brand identity.",
      "Implemented a clear information architecture to showcase services and contact information effectively."
    ],
    links: {
      live: "https://dgentechnologies.com/"
    }
  },
  {
    slug: "wellmed",
    title: "WellMed",
    description: "An AI-powered medicine PWA with multilingual support, barcode search, and data for over 900 medicines.",
    longDescription: "WellMed is an AI-powered medicine search Progressive Web App (PWA) designed to help users quickly find information about over 900 medicines. With multilingual support (English, Hindi, and Bengali) and smart search features powered by the Gemini API, the app is ideal for users looking for medicine information by name, composition, or barcode scanning. It also features a full admin dashboard for managing medicine data.",
    tags: ["React", "TypeScript", "PWA", "Gemini API", "Firebase", "Health"],
    aiHint: "medicine health",
    image: "",
    imageFit: "cover" as const,
    achievements: [
      "Enhanced search with Gemini AI for intelligent suggestions and accurate results.",
      "Implemented multilingual support for English, Hindi, and Bengali to ensure broader accessibility.",
      "Developed as a fully installable Progressive Web App (PWA) with offline capabilities.",
      "Built a comprehensive admin dashboard for easy management of the 900+ medicine database."
    ],
    links: {
      github: "https://github.com/MrTG1B/WellMeds",
      live: "https://wellmed.vercel.app/"
    }
  },
  {
    slug: "promptforge",
    title: "PromptForge",
    description: "A user-friendly platform to craft, refine, and generate high-quality prompts for various AI models.",
    longDescription: "PromptForge is a user-friendly web-based platform designed to help users craft high-quality, effective prompts for various AI models. Whether you're a beginner exploring AI tools or a seasoned prompt engineer, PromptForge streamlines the process of generating and refining prompts to get the best possible responses from your AI of choice.",
    tags: ["Next.js", "TypeScript", "Firebase", "Appwrite", "AI", "reCAPTCHA"],
    aiHint: "artificial intelligence",
    image: "https://picsum.photos/seed/3/600/400",
    imageFit: "cover" as const,
    achievements: [
      "Implemented secure user authentication with Firebase, including Google and Facebook login options.",
      "Integrated reCAPTCHA Enterprise to protect the platform from automated abuse.",
      "Developed an intuitive, mobile-friendly interface with features like a prompt template generator and one-click copy to clipboard.",
      "Used Appwrite for secure storage and management of user profile images."
    ],
    links: {
      github: "https://github.com/MrTG1B/PromptForge",
      live: "https://prompttforge.vercel.app/"
    }
  },
  {
    slug: "affordable-3d-scanner",
    title: "Affordable 3D Scanner",
    description: "A low-cost 360° 3D scanner using custom hardware and Python for structural analysis.",
    longDescription: "This project focuses on creating a cost-effective 3D scanning solution using accessible hardware. The scanner is capable of capturing 360-degree models of objects, with a primary application in monitoring the structural integrity of pipes and other industrial components. It provides a valuable tool for preventative maintenance and analysis.",
    tags: ["3D Scanning", "Hardware", "IoT", "Python"],
    aiHint: "3d model scanner",
    image: "https://images.unsplash.com/photo-1526593714223-37c814d5aea9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsaWRhcnxlbnwwfHx8fDE3NjMzMDQ5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageFit: "cover" as const,
    achievements: [
      "Developed a working prototype for under $100.",
      "Achieved high-resolution scans suitable for structural analysis.",
      "Wrote custom software for processing and visualizing the 3D data."
    ],
    links: {}
  },
   {
    slug: "gemini-powered-bot",
    title: "AI-Powered Mobile Robot",
    description: "An autonomous robot integrating Google's Gemini API for intelligent navigation and decision-making in complex environments.",
    longDescription: "This project showcases the integration of cutting-edge cloud AI with robotics. The robot utilizes Google's Gemini API to process real-time sensory information from LiDAR, ultrasonic, and IMU sensors, enabling it to navigate complex environments and make intelligent decisions without predefined paths. A Flask-based web interface allows for remote monitoring and control, demonstrating a scalable and low-cost solution for modern automation challenges.",
    tags: ["Robotics", "AI", "Gemini API", "ESP32", "LiDAR", "Flask", "IoT"],
    aiHint: "robot technology",
    image: "https://images.unsplash.com/photo-1745688810809-5040dc0cd002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8cm92ZXIlMjByb2JvdHxlbnwwfHx8fDE3NjMzMDUwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageFit: "cover" as const,
    achievements: [
      "Successfully integrated the Google Gemini API for real-time, cloud-based navigation decisions, reducing onboard computational load.",
      "Engineered a multi-sensor system (LiDAR, Ultrasonic, IMU) for robust environmental perception and obstacle avoidance.",
      "Developed a reliable fail-safe mechanism that enables local, sonar-based navigation during network or API failures.",
      "Built a Python Flask web interface for remote monitoring and manual control of the robot."
    ],
    links: {}
  },
  {
    slug: "auralis",
    title: "Auralis",
    description: "An IoT-enabled smart street lighting system with adaptive brightness, fault detection, and dual communication (Wi-Fi/LoRaWAN).",
    longDescription: "Auralis is an innovative IoT-enabled smart street lighting system designed to significantly reduce energy consumption and improve fault management. It features adaptive lighting based on real-time ambient light and motion detection, and a dual-communication architecture using both Wi-Fi and LoRaWAN to ensure scalability and reliability in urban and rural settings. A cloud-based dashboard provides centralized monitoring and control.",
    tags: ["IoT", "ESP32", "LoRaWAN", "Energy Efficiency", "Smart City"],
    aiHint: "smart city light",
    image: "/Images/auralis.png",
    imageFit: "contain" as const,
    achievements: [
      "Won 1st Runner-up for the Smart Street Light System at Rajabazar Science College.",
      "Awarded 2nd Runner-up at Jadavpur University for the project's innovation.",
      "Achieved up to 80% reduction in energy consumption through adaptive lighting algorithms.",
      "Developed a real-time fault detection system that monitors power, network, and hardware anomalies.",
      "Designed a dual-communication architecture using Wi-Fi and LoRaWAN for versatile deployment."
    ],
    links: {
      github: "https://github.com/MrTG1B/Auralis"
    }
  },
  {
    slug: "handy",
    title: "Handy",
    description: "An affordable myoelectric prosthetic hand using 3D printing, custom firmware, and a companion Android app.",
    longDescription: "Handy is a project aimed at creating a low-cost, highly functional myoelectric prosthetic hand. It uses muscle sensors to control the hand's movements, providing a more intuitive experience for the user. A companion mobile app allows for calibration and customization of the prosthetic.",
    tags: ["Prosthetics", "3D Printing", "Android", "Arduino"],
    aiHint: "robotic hand",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyb2JvdCUyMGhhbmR8ZW58MHx8fHwxNzYzMjk5Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imageFit: "cover" as const,
    achievements: [
      "3D printed and assembled a fully functional prototype.",
      "Developed custom firmware for processing myoelectric signals.",
      "Created an Android app for controlling and configuring the hand.",
      "Won 'Best Approach' award with a cash prize at Hacksprint, organized by IIEST Shibpur.",
      "Secured 2nd position and a cash prize in the regional round with Team Lumen."
    ],
    links: {
      github: "https://github.com/MrTG1B/Handy"
    }
  },
  {
    slug: "agridrone",
    title: "AgriDrone",
    description: "A cost-efficient agricultural drone designed for precision pesticide spraying and crop monitoring.",
    longDescription: "AgriDrone is an agricultural drone designed for precision pesticide spraying. It aims to reduce chemical waste and improve crop health by targeting specific areas. The drone is built with cost-effective components, making it accessible for small to medium-sized farms.",
    tags: ["Drone", "Agriculture", "Hardware", "IoT"],
    aiHint: "agriculture drone",
    image: "https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhZ3JpY3VsdHVyYWwlMjBkcm9uZXxlbnwwfHx8fDE3NjMzMDQ4MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageFit: "cover" as const,
    achievements: [],
    links: {}
  },
  {
    slug: "nova",
    title: "N.O.V.A.",
    description: "A voice-activated personal AI assistant, combining Python backend with API integrations.",
    longDescription: "N.O.V.A. (Neural Operating & Voice Assistant) is a personal AI assistant inspired by Jarvis from Iron Man. It can perform various tasks through voice commands, such as controlling smart home devices, providing information, and managing schedules. It integrates with multiple APIs to extend its capabilities.",
    tags: ["AI", "Python", "Voice Assistant"],
aiHint: "ai assistant robot",
    image: "https://picsum.photos/seed/9/600/400",
    imageFit: "cover" as const,
    achievements: [],
    links: {
      github: "https://github.com/MrTG1B/N.O.V.A",
      live: "https://project-nova.netlify.app/"
    }
  },
  {
    slug: "refix",
    title: "RefiX",
    description: "An innovative application for managing and tracking personal projects and tasks.",
    longDescription: "RefiX is a powerful yet simple tool designed to help individuals and small teams organize their work. It combines task management, progress tracking, and deadline reminders into a clean and intuitive interface, helping you stay on top of your projects and achieve your goals.",
    tags: ["Productivity", "Web App", "Task Management"],
    aiHint: "app interface",
    image: "https://picsum.photos/seed/10/600/400",
    imageFit: "cover" as const,
    achievements: [],
    link: {
       github: "https://github.com/MrTG1B/RefiX"
    }
  }
];
