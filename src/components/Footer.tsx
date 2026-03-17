import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(155, 109, 255, 0.1)",
        padding: "48px 24px 32px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Link href="/" className="gradient-brand font-head font-extrabold text-base no-underline">
        @nidhiabroad
      </Link>
      <p style={{ color: "var(--grey1)", fontSize: 13, marginTop: 12, marginBottom: 24 }}>
        Real stories. Honest guides. Life abroad — figured out.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
        {[
          { href: "/guides", label: "Guides" },
          { href: "/consult", label: "Consult" },
          { href: "/community", label: "Community" },
          { href: "/about", label: "About" },
          { href: "/newsletter", label: "Newsletter" },
        ].map((l) => (
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
      <p style={{ color: "var(--grey2)", fontSize: 12, marginTop: 32 }}>
        © {new Date().getFullYear()} nidhiabroad.com · Made with ♥ somewhere in Europe
      </p>
    </footer>
  );
}
