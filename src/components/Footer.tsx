import Link from "next/link";

const socials = [
  {
    label: "Instagram",
    handle: "@nidhiabroad",
    href: "https://instagram.com/nidhiabroad",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    handle: "@nidhiabroad",
    href: "https://youtube.com/@nidhiabroad",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Substack",
    handle: "Inner Circle",
    href: "https://substack.com/@nidhiabroad",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Nidhi Duhan",
    href: "https://linkedin.com/in/nidhiduhan",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

const navLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/consult", label: "Consult" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(155, 109, 255, 0.1)",
        padding: "56px 24px 32px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Top row — brand + socials */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 40 }}>

          {/* Brand */}
          <div>
            <Link href="/" className="gradient-brand font-head font-extrabold text-base no-underline">
              @nidhiabroad
            </Link>
            <p style={{ color: "var(--grey1)", fontSize: 13, marginTop: 8, maxWidth: 260, lineHeight: 1.6 }}>
              Building careers that belong anywhere.
            </p>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`${s.label} · ${s.handle}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "var(--grey1)",
                  textDecoration: "none",
                  fontSize: 13,
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(155,109,255,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "var(--white)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(155,109,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.color = "var(--grey1)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
              >
                {s.icon}
                <span style={{ fontFamily: "var(--font-head)", fontWeight: 600 }}>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginBottom: 24 }} />

        {/* Bottom row — nav + copyright */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ color: "var(--grey1)", fontSize: 13 }}
                className="hover:text-[#F0EFF8] no-underline transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p style={{ color: "var(--grey2)", fontSize: 12 }}>
            © {new Date().getFullYear()} nidhiabroad.com · Made with ♥ in Europe
          </p>
        </div>

      </div>
    </footer>
  );
}
