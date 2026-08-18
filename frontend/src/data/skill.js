import { 
    Code2, 
    Server, 
    Database, 
    Wrench 
} 
from "lucide-react";

  export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    color: "text-violet-500",
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },

  {
    title: "Backend",
    icon: Server,
    color: "text-green-500",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Nodemailer",
    ],
  },

  {
    title: "Database",
    icon: Database,
    color: "text-orange-500",
    skills: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
    ],
  },

  {
    title: "Tools & Others",
    icon: Wrench,
    color: "text-blue-500",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Figma",
      "Postman",
      "Vercel",
    ],
  },
];