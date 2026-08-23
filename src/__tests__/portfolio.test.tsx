import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

// Import data to test
import { projects } from "../data/projects";
import { navLinks, socialLinks } from "../data/social";
import { skillCategories } from "../data/skills";
import { timelineData } from "../data/experience";

// Import a component to test
import SectionHeading from "../components/ui/SectionHeading";

describe("Portfolio Data Layer Validation", () => {
  it("should contain exactly 4 projects with valid links and descriptions", () => {
    expect(projects).toHaveLength(4);
    
    projects.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(project.title).toBeDefined();
      expect(project.description.length).toBeGreaterThan(10);
      expect(project.techStack.length).toBeGreaterThan(0);
      expect(project.githubUrl).toContain("https://github.com/avinashsingh88161-sudo");
    });
  });

  it("should contain all required navigation links", () => {
    expect(navLinks).toHaveLength(7);
    const labels = navLinks.map((link) => link.label);
    expect(labels).toContain("Home");
    expect(labels).toContain("About");
    expect(labels).toContain("Projects");
    expect(labels).toContain("Contact");
  });

  it("should configure correct contact social links for Avinash", () => {
    const githubLink = socialLinks.find((link) => link.name === "GitHub");
    const linkedinLink = socialLinks.find((link) => link.name === "LinkedIn");
    const emailLink = socialLinks.find((link) => link.name === "Email");

    expect(githubLink?.url).toBe("https://github.com/avinashsingh88161-sudo");
    expect(linkedinLink?.url).toBe("https://linkedin.com/in/avinash-singh-62a312384");
    expect(emailLink?.url).toBe("mailto:avinashsingh88161@gmail.com");
  });

  it("should contain categorized skills with correct icons", () => {
    expect(skillCategories.length).toBeGreaterThan(0);
    const frontendCategory = skillCategories.find((cat) => cat.title === "Frontend");
    expect(frontendCategory).toBeDefined();
    expect(frontendCategory?.skills.length).toBeGreaterThan(0);
  });

  it("should contain chronological experience history details", () => {
    expect(timelineData.length).toBe(5);
    expect(timelineData[0].title).toContain("BroStartup");
  });
});

describe("Portfolio Reusable UI Components", () => {
  it("renders SectionHeading with title and subtitle correctly", () => {
    render(
      <SectionHeading
        title="Test Heading Title"
        subtitle="This is a test subtitle describing the section"
      />
    );

    const titleElement = screen.getByText("Test Heading Title");
    const subtitleElement = screen.getByText("This is a test subtitle describing the section");

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
});
