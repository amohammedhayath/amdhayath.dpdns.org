"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  Layers,
  X,
  CheckCircle2,
} from "lucide-react";
import {
  portfolioData,
  type ProjectCategory,
  type ProjectItem,
} from "@/data/portfolio";

function BentoCard({
  project,
  onSelect,
}: {
  project: ProjectItem;
  onSelect: (project: ProjectItem, triggerEl: HTMLButtonElement) => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightBackground = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(205, 134, 86, 0.15), rgba(245, 158, 11, 0.04) 40%, transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.article
      layout
      initial={{ y: 14 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col justify-between rounded-bento border border-border-subtle bg-surface p-6 sm:p-8 shadow-bento transition-all duration-300 hover:border-border-highlight hover:shadow-bento-hover overflow-hidden ${
        project.bentoSpan === "wide" ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* Zero-Re-Render MotionValue Copper Spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-bento opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlightBackground }}
      />

      {/* Ambient Top Gradient Wash */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${project.accentGradient} opacity-75 transition-opacity group-hover:opacity-100`}
      />

      <div className="relative z-10">
        {/* Card Header: Category & Direct Links */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-border-subtle/80">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              {project.category}
            </span>
            {project.featuredBadge && (
              <span className="rounded-terminal border border-accent-copper/40 bg-accent-copper/10 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-accent-copper">
                {project.featuredBadge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-terminal border border-border-subtle bg-surface-elevated/80 text-ink-secondary transition-colors hover:border-border-highlight hover:text-ink-primary"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live deployment`}
              className="flex h-8 w-8 items-center justify-center rounded-terminal border border-border-subtle bg-surface-elevated/80 text-ink-secondary transition-colors hover:border-border-highlight hover:text-ink-primary"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Title, Tagline, and Summary */}
        <div className="mt-6">
          <p className="font-mono text-xs text-accent-copper mb-1.5">
            {project.tagline}
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-ink-secondary">
            {project.summary}
          </p>
        </div>

        {/* Scannable Impact Telemetry Strip */}
        <div className="mt-6 grid grid-cols-3 gap-2.5 rounded-terminal border border-border-subtle bg-canvas/60 p-3.5">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="space-y-0.5">
              <div className="font-mono text-xs sm:text-sm font-semibold text-ink-primary">
                {metric.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: Tech Stack Pills & Case Study Trigger */}
      <div className="relative z-10 mt-6 pt-5 border-t border-border-subtle/80 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-terminal border border-border-subtle bg-surface-elevated/70 px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={(e) => onSelect(project, e.currentTarget)}
          className="terminal-dashed-btn inline-flex items-center gap-1.5 rounded-terminal bg-surface-elevated px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-ink-primary"
        >
          <Layers className="h-3.5 w-3.5 text-accent" />
          <span>Inspect Architecture</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-accent-copper transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.article>
  );
}

export function ProjectsBento() {
  const { projectsSection } = portfolioData;
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsSection.items
      : projectsSection.items.filter(
          (item) => item.category === selectedCategory
        );

  const closeModal = useCallback(() => {
    setActiveProject(null);
    setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 0);
  }, []);

  const openModal = useCallback(
    (project: ProjectItem, triggerEl: HTMLButtonElement) => {
      lastTriggerRef.current = triggerEl;
      setActiveProject(project);
    },
    []
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [closeModal]
  );

  useEffect(() => {
    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 10);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProject, handleKeyDown]);

  return (
    <section
      id="work"
      className="relative py-20 sm:py-28 px-4 sm:px-6 border-t border-border-subtle"
    >
      <div className="mx-auto max-w-portfolio">
        {/* Section Header + Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-border-subtle">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-copper mb-3">
              <span>{projectsSection.eyebrow}</span>
            </div>
            <h2 className="font-display text-display-lg text-ink-primary">
              {projectsSection.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed">
              {projectsSection.subtitle}
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div
            role="group"
            aria-label="Filter featured projects by domain"
            className="flex flex-wrap items-center gap-1.5 rounded-bento border border-border-subtle bg-surface p-1.5 self-start lg:self-auto"
          >
            {projectsSection.categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative rounded-terminal px-3 py-1.5 font-mono text-xs transition-colors ${
                    isSelected
                      ? "text-canvas font-semibold"
                      : "text-ink-muted hover:text-ink-primary"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="bento-filter-pill"
                      className="absolute inset-0 rounded-terminal bg-accent z-0"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical 3-Column Bento Grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <BentoCard
                key={project.id}
                project={project}
                onSelect={openModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study & Architecture Preview Modal */}
      <AnimatePresence>
        {activeProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop Button for Accessible Dismiss */}
            <motion.button
              type="button"
              tabIndex={-1}
              aria-label="Close modal backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 w-full h-full bg-canvas/85 backdrop-blur-md cursor-default"
            />

            {/* Modal Container */}
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-bento border border-border-highlight/60 bg-surface p-6 sm:p-8 shadow-bento-hover"
            >
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-border-subtle">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-accent-copper">
                    <span>CASE STUDY</span>
                    <span>×</span>
                    <span>{activeProject.category}</span>
                  </div>
                  <h3
                    id="case-study-modal-title"
                    className="mt-1 font-display text-2xl sm:text-3xl font-semibold text-ink-primary"
                  >
                    {activeProject.title}
                  </h3>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close case study modal"
                  onClick={closeModal}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-terminal border border-border-subtle bg-surface-elevated text-ink-secondary hover:border-border-highlight hover:text-ink-primary"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Metrics Strip */}
              <div className="mt-6 grid grid-cols-3 gap-3 rounded-terminal border border-border-subtle bg-canvas/80 p-4">
                {activeProject.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-sm sm:text-base font-semibold text-accent">
                      {m.value}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem & System Architecture */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-terminal border border-border-subtle bg-surface-elevated/50 p-4">
                  <div className="font-mono text-xs uppercase tracking-wider text-accent-copper mb-2">
                    Engineering Challenge
                  </div>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {activeProject.caseStudy.challenge}
                  </p>
                </div>

                <div className="rounded-terminal border border-border-subtle bg-surface-elevated/50 p-4">
                  <div className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                    System Architecture
                  </div>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {activeProject.caseStudy.architecture}
                  </p>
                </div>
              </div>

              {/* Key Engineering Outcomes */}
              <div className="mt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-ink-muted mb-3">
                  Quantifiable Outcomes & Craft Details
                </div>
                <ul className="space-y-2.5">
                  {activeProject.caseStudy.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink-secondary"
                    >
                      <CheckCircle2 className="h-4 w-4 text-accent-status shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Architecture Snippet */}
              <div className="mt-6 rounded-terminal border border-border-subtle bg-canvas overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border-subtle bg-surface-elevated/60 font-mono text-xs text-ink-muted">
                  <span className="flex items-center gap-2">
                    <Code2 className="h-3.5 w-3.5 text-accent" />
                    {activeProject.caseStudy.codeSnippet.filename}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-accent-copper">
                    TypeScript
                  </span>
                </div>
                <pre className="p-4 text-xs font-mono text-ink-secondary overflow-x-auto leading-relaxed">
                  <code>{activeProject.caseStudy.codeSnippet.code}</code>
                </pre>
              </div>

              {/* Modal Actions Footer */}
              <div className="mt-6 pt-5 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-terminal border border-border-subtle bg-surface-elevated px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-dashed-btn inline-flex items-center gap-2 rounded-terminal px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-terminal bg-accent px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-canvas hover:bg-accent-copper transition-colors"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
