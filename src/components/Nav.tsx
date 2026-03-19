"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/guides", label: "Guides" },
  { href: "/consult", label: "Consult" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "14px 40px",
      background: "rgba(253,252,250,0.88)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <Link href="/" className="gradient-brand font-head font-extrabold text-sm tracking-wide no-underline">
        nidhiabroad
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex gap-1 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} style={{
              color: "var(--grey1)", fontSize: 13,
              padding: "6px 14px", borderRadius: 8,
              transition: "var(--transition)", textDecoration: "none",
              display: "block",
            }}
            className="hover:text-[#1A1728] hover:bg-[#F1EDE6]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/consult" className="hidden md:block btn-primary text-xs px-5 py-2 no-underline">
        Book a call
      </Link>

      <button className="md:hidden" onClick={() => setOpen(!open)}
        style={{ color: "var(--grey1)", background: "none", border: "none", cursor: "pointer" }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="md:hidden glass" style={{
          position: "fixed", top: 56, left: 0, right: 0,
          padding: "16px 20px", display: "flex", flexDirection: "column", gap: 6,
          borderTop: "1px solid rgba(0,0,0,0.06)",
        }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: "var(--white)", padding: "12px 16px", borderRadius: 10, fontSize: 15, textDecoration: "none" }}
              className="hover:bg-[#F1EDE6]"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/consult" onClick={() => setOpen(false)} className="btn-primary text-center py-3 mt-2 no-underline">
            Book a call
          </Link>
        </div>
      )}
    </nav>
  );
}
