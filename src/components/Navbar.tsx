"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const { navigation, meta, hero } = portfolioData;
  const [activeSection, setActiveSection] = useState<string>("#work");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 24);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionIds = navigation.items.map((item) =>
      item.href.replace("#", "")
    );
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [navigation.items]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 pointer-events-none">
      <div className="mx-auto max-w-portfolio flex items-center justify-between gap-2">
        {/* Brand Identity Pill */}
        <motion.a
          href="#top"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto group flex items-center gap-2.5 sm:gap-3 rounded-bento border border-border-subtle bg-surface-glass px-3 sm:px-3.5 py-2 backdrop-blur-xl shadow-dock transition-colors hover:border-border-highlight"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-terminal bg-surface-elevated border border-border-strong font-mono text-xs font-semibold text-accent">
            {navigation.brandMonogram}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-sm font-semibold tracking-tight text-ink-primary">
              {navigation.brandName}
              <span className="text-accent">.</span>
            </span>
          </div>
        </motion.a>

        {/* Center Floating Glass Navigation Dock (Desktop) */}
        <motion.nav
          aria-label="Primary Navigation"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto hidden md:flex items-center gap-1 rounded-pill border px-2 py-1.5 backdrop-blur-xl shadow-dock transition-all duration-300 ${
            scrolled
              ? "border-border-strong bg-surface-glass/90"
              : "border-border-subtle bg-surface-glass/75"
          }`}
        >
          {navigation.items.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`relative px-4 py-1.5 text-xs font-medium transition-colors rounded-pill flex items-center gap-1.5 ${
                  isActive
                    ? "text-ink-primary"
                    : "text-ink-muted hover:text-ink-secondary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-pill bg-surface-elevated border border-border-strong z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </motion.nav>

        {/* Right Action / Terminal Dashed CTA (matveyan-com signature) */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center gap-2"
        >
          <a
            href={navigation.ctaHref}
            className="terminal-dashed-btn rounded-terminal bg-surface-glass px-3 sm:px-3.5 py-2 backdrop-blur-xl font-mono text-xs uppercase tracking-wider text-ink-primary flex items-center gap-2 shadow-dock"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-status animate-pulse" />
            <span className="hidden sm:inline">{navigation.ctaLabel}</span>
            <span className="sm:hidden">Hire</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-accent-copper" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-terminal border border-border-subtle bg-surface-glass text-ink-primary backdrop-blur-xl shadow-dock hover:border-border-highlight"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mt-3 mx-auto max-w-portfolio rounded-bento border border-border-strong bg-surface/95 p-4 backdrop-blur-2xl shadow-bento"
          >
            <div className="flex flex-col gap-1.5">
              {navigation.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between rounded-terminal px-3 py-2.5 text-sm font-medium text-ink-secondary hover:bg-surface-elevated hover:text-ink-primary transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-ink-muted" />
                </a>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-ink-muted">
              <span className="flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-accent" />
                {hero.locationTag}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
