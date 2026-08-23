import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "eduverse",
    title: "EduVerse",
    description:
      "An AI-powered learning platform designed to improve the learning experience through PDF management, AI-powered document summaries, flashcards, quizzes, and AI chat.",
    image: "/eduverse.jpg",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Google Gemini API",
      "Tailwind CSS",
    ],
    features: [
      "Authentication",
      "PDF Upload & Management",
      "Embedded PDF Viewer",
      "AI Document Summary",
      "Auto Flashcards",
      "AI Quiz Generator",
      "AI Chat",
      "Teacher & Student Roles",
    ],
    githubUrl: "https://github.com/avinashsingh88161-sudo/EDU-verse-learning",
    liveUrl: "https://edu-verse-learning.vercel.app/login",
  },
  {
    id: "smart-tourism",
    title: "Smart Tourism System",
    description:
      "A modern tourism platform that helps users explore destinations, discover attractions, and plan trips with intelligent recommendations and interactive maps.",
    image: "/tourism.jpg",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Destination Discovery",
      "Intelligent Recommendations",
      "Interactive Maps",
      "User Reviews & Ratings",
    ],
    githubUrl: "https://github.com/avinashsingh88161-sudo/smart-tourism-system",
    liveUrl: "https://smart-tourism-system.onrender.com/listings",
  },
  {
    id: "weather-app",
    title: "Weather App",
    description:
      "A responsive weather application providing real-time weather information, forecasts, and atmospheric data through a clean and intuitive interface.",
    image: "/weather.jpg",
    techStack: ["HTML5", "CSS3", "JavaScript", "Weather API"],
    features: [
      "Real-Time Weather Data",
      "City Search",
      "Weather Forecasts",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/avinashsingh88161-sudo/weather-app",
    liveUrl: "https://weather-app-demo.vercel.app",
  },
  {
    id: "nextjs-todo-app",
    title: "Next.js Todo App",
    description:
      "A full-stack task management application built with Next.js, MongoDB, JWT Authentication, and TypeScript, featuring a clean UI, secure routing, and task filtering.",
    image: "/todo.jpg",
    techStack: ["Next.js", "MongoDB", "JWT", "TypeScript", "Tailwind CSS"],
    features: [
      "JWT Authentication",
      "Task CRUD Operations",
      "Status Filtering",
      "Fully Responsive Layout",
    ],
    githubUrl: "https://github.com/avinashsingh88161-sudo/nextjs-todo-app",
  },
];
