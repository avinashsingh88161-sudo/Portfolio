import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description: "Core runtime, frameworks, real-time protocols & async execution",
    skills: [
      { name: "Node.js", icon: "nodejs", tag: "Runtime" },
      { name: "Express.js", icon: "express", tag: "Framework" },
      { name: "JavaScript", icon: "javascript", tag: "Language" },
      { name: "TypeScript", icon: "typescript", tag: "Language" },
      { name: "REST APIs", icon: "api", tag: "Architecture" },
      { name: "Microservices", icon: "microservices", tag: "Architecture" },
      { name: "Socket.IO", icon: "socketio", tag: "Real-time" },
      { name: "WebSockets", icon: "websocket", tag: "Protocol" },
      { name: "Asynchronous Programming", icon: "async", tag: "Core" },
    ],
  },
  {
    title: "Databases",
    description: "NoSQL, relational databases, query indexing & in-memory caching",
    skills: [
      { name: "MongoDB", icon: "mongodb", tag: "NoSQL" },
      { name: "MySQL", icon: "mysql", tag: "Relational / SQL" },
      { name: "PostgreSQL", icon: "postgresql", tag: "Relational / SQL" },
      { name: "Mongoose", icon: "mongoose", tag: "ODM" },
      { name: "Redis", icon: "redis", tag: "In-Memory / Cache" },
      { name: "Prisma", icon: "prisma", tag: "ORM" },
    ],
  },
  {
    title: "Frontend",
    description: "Modern interactive client interfaces, component design & responsive styling",
    skills: [
      { name: "React.js", icon: "react", tag: "Library" },
      { name: "Next.js", icon: "nextjs", tag: "Framework" },
      { name: "Tailwind CSS", icon: "tailwind", tag: "Styling" },
      { name: "HTML5", icon: "html5", tag: "Markup" },
      { name: "CSS3", icon: "css3", tag: "Styling" },
      { name: "Framer Motion", icon: "framer", tag: "Animation" },
      { name: "Redux Toolkit", icon: "redux", tag: "State" },
      { name: "Bootstrap", icon: "bootstrap", tag: "UI" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Containerization, version control, and CI/CD pipelines",
    skills: [
      { name: "Git", icon: "git", tag: "VCS" },
      { name: "GitHub", icon: "github", tag: "Platform" },
      { name: "Postman", icon: "postman", tag: "API Testing" },
      { name: "Vercel", icon: "vercel", tag: "Deployment" },
      { name: "Render", icon: "render", tag: "Cloud" },
      { name: "VS Code", icon: "vscode", tag: "IDE" },
      { name: "Docker", icon: "docker", tag: "Containers" },
      { name: "NPM", icon: "npm", tag: "Package Manager" },
    ],
  },
];
