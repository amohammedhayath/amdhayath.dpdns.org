"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Globe,
  Linkedin,
  Mail,
  Terminal,
  Twitter,
} from "lucide-react";
import { portfolioData, type SocialLink } from "@/data/portfolio";

function SocialIcon({ platform }: { platform: SocialLink["platform"] }) {
  switch (platform) {
    case "github":
      return <Github className="h-4 w-4 text-accent-copper" />;
    case "linkedin":
      return <Linkedin className="h-4 w-4 text-accent-copper" />;
    case "twitter":
      return <Twitter className="h-4 w-4 text-accent-copper" />;
    case "mail":
      return <Mail className="h-4 w-4 text-accent-copper" />;
    default:
      return <Globe className="h-4 w-4 text-accent-copper" />;
  }
}

export function ContactFooter() {
  const { contactSection, meta } = portfolioData;
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
      copyTimerRef.current = setTimeout(() => setCopied(false), 3000);
    } catch {
      window.location.href = `mailto:${contactSection.email}`;
    }
  };

  return (
    <footer
      id="contact"
      className="relative pt-20 pb-14 sm:pt-28 sm:pb-20 px-4 sm:px-6 border-t border-border-subtle overflow-hidden"
    >
      {/* Subtle Bottom Copper Illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-copper-glow opacity-60"
      />

      <div className="relative mx-auto max-w-portfolio">
        {/* High-Impact Contact Callout Panel */}
        <motion.div
          initial={{ y: 14 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-bento border border-border-strong bg-surface p-8 sm:p-12 shadow-bento"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-copper">
                <span>{contactSection.eyebrow}</span>
              </div>

              <h2 className="font-display text-display-lg text-ink-primary">
                {contactSection.headline}
              </h2>

              <p className="text-sm sm:text-base text-ink-secondary max-w-xl leading-relaxed">
                {contactSection.subheadline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs text-ink-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-status animate-pulse" />
                  {contactSection.responseSla}
                </span>
                <span>×</span>
                <span>{contactSection.location}</span>
              </div>
            </div>

            {/* Right Action Cluster: 1-Click Copy Email + Direct Mailto */}
            <div className="lg:col-span-5 flex flex-col gap-3 rounded-bento border border-border-subtle bg-canvas/80 p-6">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                <span>DIRECT CHANNEL</span>
                <span className="text-accent">ENCRYPTED / TLS</span>
              </div>

              <div className="font-mono text-base sm:text-lg font-semibold text-ink-primary break-all py-1">
                {contactSection.email}
              </div>

              <div className="mt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-terminal bg-ink-primary px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-canvas transition-all hover:bg-accent"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-canvas" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>{contactSection.copyButtonLabel}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contactSection.email}`}
                  className="terminal-dashed-btn inline-flex items-center justify-center gap-2 rounded-terminal bg-surface-elevated px-4 py-3.5 font-mono text-xs uppercase tracking-wider text-ink-primary"
                >
                  <Mail className="h-4 w-4 text-accent-copper" />
                  <span>{contactSection.directMailLabel}</span>
                </a>
              </div>

              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  aria-live="polite"
                  className="font-mono text-xs text-accent-status pt-1"
                >
                  ✓ {contactSection.copiedFeedbackLabel}
                </motion.p>
              )}
            </div>
          </div>

          {/* 4-Column Social Matrix */}
          <div className="mt-10 pt-8 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {contactSection.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-terminal border border-border-subtle bg-surface-elevated/60 px-4 py-3.5 transition-all hover:border-border-highlight hover:bg-surface-elevated"
              >
                <div className="flex items-center gap-3">
                  <SocialIcon platform={social.platform} />
                  <div>
                    <div className="text-xs font-semibold text-ink-primary group-hover:text-accent transition-colors">
                      {social.label}
                    </div>
                    <div className="font-mono text-[11px] text-ink-muted">
                      {social.handle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Architectural Colophon */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-accent" />
            <span>{contactSection.copyright}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{meta.designSystemCredit}</span>
            <span>×</span>
            <a
              href="#top"
              className="text-ink-secondary hover:text-accent transition-colors uppercase"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
