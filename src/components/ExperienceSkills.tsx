"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  Cpu,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ExperienceSkills() {
  const { experienceSection, skillsSection } = portfolioData;

  return (
    <>
      {/* SECTION 02: ENGINEERING EXPERIENCE TIMELINE */}
      <section
        id="experience"
        className="relative py-20 sm:py-28 px-4 sm:px-6 border-t border-border-subtle"
      >
        <div className="mx-auto max-w-portfolio">
          {/* Header */}
          <div className="max-w-2xl pb-12 border-b border-border-subtle">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-copper mb-3">
              <span>{experienceSection.eyebrow}</span>
            </div>
            <h2 className="font-display text-display-lg text-ink-primary">
              {experienceSection.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed">
              {experienceSection.subtitle}
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="mt-12 space-y-6">
            {experienceSection.timeline.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ y: 14 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 rounded-bento border border-border-subtle bg-surface p-6 sm:p-8 shadow-bento transition-all hover:border-border-highlight"
              >
                {/* Left Column: Period, Company, Role Metadata */}
                <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-subtle pb-6 lg:pb-0 lg:pr-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-terminal border border-border-strong bg-surface-elevated px-2.5 py-1 font-mono text-xs text-accent">
                      <span>{item.period}</span>
                    </div>

                    <h3 className="mt-4 font-display text-xl sm:text-2xl font-semibold text-ink-primary group-hover:text-accent transition-colors">
                      {item.role}
                    </h3>

                    <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm font-medium text-ink-secondary">
                      <Briefcase className="h-3.5 w-3.5 text-accent-copper" />
                      <span>{item.company}</span>
                    </div>

                    <div className="mt-2 flex items-center gap-2 font-mono text-xs text-ink-muted">
                      <MapPin className="h-3.5 w-3.5 text-ink-muted" />
                      <span>{item.location}</span>
                      <span>×</span>
                      <span>{item.type}</span>
                    </div>
                  </div>

                  {/* Scannable Impact Metric Callouts */}
                  <div className="mt-6 grid grid-cols-3 gap-2 rounded-terminal border border-border-subtle bg-canvas/70 p-3">
                    {item.impactMetrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-mono text-xs sm:text-sm font-semibold text-accent-status">
                          {metric.value}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Narrative, Bullet Outcomes, & Tech Tags */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-5">
                  <div>
                    <p className="text-sm sm:text-base text-ink-primary font-medium leading-relaxed">
                      {item.summary}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {item.highlights.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm text-ink-secondary leading-relaxed"
                        >
                          <TrendingUp className="h-4 w-4 text-accent-copper shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-1.5">
                    {item.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-terminal border border-border-subtle bg-surface-elevated/80 px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: TECHNICAL SKILLS & CAPABILITY MATRIX */}
      <section
        id="skills"
        className="relative py-20 sm:py-28 px-4 sm:px-6 border-t border-border-subtle"
      >
        <div className="mx-auto max-w-portfolio">
          {/* Header */}
          <div className="max-w-2xl pb-12 border-b border-border-subtle">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-copper mb-3">
              <span>{skillsSection.eyebrow}</span>
            </div>
            <h2 className="font-display text-display-lg text-ink-primary">
              {skillsSection.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed">
              {skillsSection.subtitle}
            </p>
          </div>

          {/* 2x2 Architectural Capability Matrix */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsSection.categories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ y: 14 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between rounded-bento border border-border-subtle bg-surface p-6 sm:p-8 shadow-bento hover:border-border-highlight transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-border-subtle">
                    <div className="flex items-center gap-2 font-mono text-xs text-accent">
                      <Cpu className="h-3.5 w-3.5 text-accent-copper" />
                      <span className="uppercase tracking-wider text-ink-muted">
                        Capability Domain
                      </span>
                    </div>
                    <span className="rounded-terminal border border-border-strong bg-surface-elevated px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-secondary">
                      {category.metricBadge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-ink-primary">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink-muted">
                    {category.subtitle}
                  </p>

                  {/* Skill Rows */}
                  <div className="mt-6 divide-y divide-border-subtle/70 border-t border-border-subtle/70">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                          <span className="text-sm font-medium text-ink-primary">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-ink-muted sm:text-right">
                          {skill.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
