import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avinash Singh | Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN Stack development. Building modern, responsive, and scalable web applications with clean user experiences.",
  keywords: [
    "Avinash Singh",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Avinash Singh" }],
  openGraph: {
    title: "Avinash Singh | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN Stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
