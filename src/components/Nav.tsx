"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/guides", label: "Guides" },
  { href: "/consult", label: "Consult" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "14px 48px",
        background: "rgba(10, 10, 15, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(155, 109, 255, 0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/" className="gradient-brand font-head font-extrabold text-sm tracking-wide no-underline">
        @nidhiabroad
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-1 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              style={{ color: "var(--grey1)", fontSize: 13, padding: "6px 14px", borderRadius: 8, transition: "var(--transition)" }}
              className="hover:text-[#F0EFF8] hover:bg-[#1A1A24] no-underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/newsletter"
        className="hidden md:block btn-gold text-xs px-4 py-2 no-underline"
        style={{ fontFamily: "var(--font-head)" }}
      >
        Newsletter ✦
      </Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-[var(--grey1)]"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden glass"
          style={{
            position: "fixed",
            top: 56,
            left: 0,
            right: 0,
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: "var(--white)", padding: "12px 16px", borderRadius: 10, fontSize: 15 }}
              className="hover:bg-[#1A1A24] no-underline"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/newsletter"
            onClick={() => setOpen(false)}
            className="btn-gold text-center py-3 mt-2 no-underline"
          >
            Newsletter ✦
          </Link>
        </div>
      )}
    </nav>
  );
}
