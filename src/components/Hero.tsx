"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Check, Copy, Sparkles, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { hero, contactSection, meta } = portfolioData;
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactSection.email);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${contactSection.email}`;
    }
  };

  return (
    <section
      id="top"
      className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Environmental Copper-Amber Radial Glow (basement-studio signature) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-copper-glow opacity-90"
      />

      <div className="relative mx-auto max-w-portfolio">
        {/* Top Telemetry & Availability Bar */}
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.45, ease: easeOutExpo }}
          className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-border-subtle"
        >
          <div className="inline-flex items-center gap-2.5 rounded-pill border border-border-strong bg-surface/90 px-3.5 py-1.5 shadow-bento max-w-full overflow-hidden">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-status opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-status" />
            </span>
            <span className="font-mono text-[11px] sm:text-xs text-ink-primary tracking-wide truncate">
              {hero.availabilityBadge}
            </span>
          </div>

          <div className="flex items-center gap-2.5 font-mono text-[11px] sm:text-xs text-ink-muted">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-accent-copper" />
              {meta.domain}
            </span>
            <span className="hidden sm:inline text-border-strong">×</span>
            <span>{hero.locationTag}</span>
          </div>
        </motion.div>

        {/* Main Display Typographic Block */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-7 xl:col-span-8 min-w-0">
            <motion.div
              initial={{ y: 12 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.04, ease: easeOutExpo }}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-copper mb-4"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent shrink-0" />
              <span className="truncate">{hero.eyebrow}</span>
            </motion.div>

            {/* Primary Role & Name Hierarchy */}
            <motion.h1
              initial={{ y: 14 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: easeOutExpo }}
              className="font-display text-display-xl text-ink-primary uppercase tracking-tight break-words"
            >
              <span className="block text-ink-secondary font-normal text-lg sm:text-2xl md:text-3xl tracking-tight normal-case mb-3">
                {hero.name} —{" "}
                <span className="text-ink-primary font-semibold">
                  {hero.roleTitle}
                </span>
              </span>
              <span className="block">{hero.headlinePrefix}</span>
              <span className="block bg-gradient-to-r from-[#fefefe] via-[#cd8656] to-[#f59e0b] bg-clip-text text-transparent">
                {hero.headlineAccent}
              </span>
            </motion.h1>
          </div>

          {/* Right Column Value Proposition & Secondary Narrative */}
          <motion.div
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: easeOutExpo }}
            className="lg:col-span-5 xl:col-span-4 min-w-0 flex flex-col justify-between space-y-6 rounded-bento border border-border-strong bg-surface p-6 sm:p-7 shadow-bento"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-muted pb-3 border-b border-border-subtle">
                <span>VALUE PROPOSITION</span>
              </div>
              <p className="text-lg sm:text-xl font-semibold leading-snug text-ink-primary pt-1">
                “{hero.valueProposition}”
              </p>
              <p className="text-sm leading-relaxed text-ink-secondary">
                {hero.secondaryBio}
              </p>
            </div>

            {/* Dual CTA Cluster */}
            <div className="pt-2 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <a
                href={hero.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 rounded-terminal bg-accent px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-canvas transition-all hover:bg-ink-primary hover:text-canvas"
              >
                <span>{hero.primaryCtaLabel}</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="terminal-dashed-btn inline-flex items-center justify-center gap-2 rounded-terminal bg-surface-elevated px-4 py-3 font-mono text-xs uppercase tracking-wider text-ink-primary"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-accent-status" />
                    <span className="text-accent-status">Copied Email</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-accent-copper" />
                    <span>{hero.secondaryCtaLabel}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* 4-Column Architectural Impact Metric Strip */}
        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: easeOutExpo }}
          className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-bento overflow-hidden border border-border-subtle bg-border-subtle shadow-bento"
        >
          {hero.metrics.map((metric) => (
            <div
              key={metric.label}
              className="group relative bg-surface p-6 transition-colors hover:bg-surface-elevated"
            >
              <div className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink-primary group-hover:text-accent transition-colors">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-medium text-ink-secondary">
                {metric.label}
              </div>
              <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
