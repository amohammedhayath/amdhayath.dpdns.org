import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsBento } from "@/components/ProjectsBento";
import { ExperienceSkills } from "@/components/ExperienceSkills";
import { ContactFooter } from "@/components/ContactFooter";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsBento />
        <ExperienceSkills />
      </main>
      <ContactFooter />
    </div>
  );
}
