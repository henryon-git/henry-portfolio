"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Shield } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${
        scrolled
          ? "dark:bg-navy/80 bg-slate-light/80 border-b border-mint/10 shadow-lg shadow-navy/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded border border-mint/40 flex items-center justify-center group-hover:border-mint group-hover:shadow-[0_0_12px_rgba(15,244,198,0.4)] transition-all duration-300">
            <Shield className="w-4 h-4 text-mint" />
          </div>
          <span className="font-display font-600 text-sm tracking-widest uppercase dark:text-slate-light text-navy/80">
            H<span className="text-mint">.</span>Nelson
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("/") && !link.href.includes("#") ? "_blank" : undefined}
              rel={link.href.startsWith("/") && !link.href.includes("#") ? "noopener noreferrer" : undefined}
              className="font-mono text-sm dark:text-slate-muted text-navy/60 hover:text-mint dark:hover:text-mint transition-colors duration-200 relative group"
            >
              <span className="text-mint/50 mr-1 text-xs">./</span>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-mint group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Right: Theme toggle + mobile menu */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded border border-mint/20 flex items-center justify-center hover:border-mint/60 hover:shadow-[0_0_12px_rgba(15,244,198,0.2)] transition-all duration-200 dark:text-slate-muted text-navy/60 hover:text-mint"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded border border-mint/20 flex items-center justify-center hover:border-mint/60 transition-all duration-200 dark:text-slate-muted text-navy/60 hover:text-mint"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="nav-glass dark:bg-navy/90 bg-slate-light/90 border-t border-mint/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("/") && !link.href.includes("#") ? "_blank" : undefined}
              rel={link.href.startsWith("/") && !link.href.includes("#") ? "noopener noreferrer" : undefined}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm dark:text-slate-muted text-navy/60 hover:text-mint dark:hover:text-mint transition-colors duration-200 flex items-center gap-3"
            >
              <span className="text-mint font-mono text-xs w-4">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
