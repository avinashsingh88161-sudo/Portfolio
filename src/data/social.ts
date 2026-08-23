import { NavLink, SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/avinashsingh88161-sudo",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/avinash-singh-62a312384",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:avinashsingh88161@gmail.com",
    icon: "mail",
  },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const RESUME_URL = "/resume.pdf"; // Replace with your actual resume URL
