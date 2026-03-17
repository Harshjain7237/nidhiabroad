import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  return (
    <div style={{ background: "#0A0A0F", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Nav />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 1.5rem", textAlign: "center" }}>
        <h1 className="gradient-brand font-head" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem" }}>
          Join the Community
        </h1>
        <p style={{ color: "#8B8AA0", fontSize: "1.125rem", maxWidth: "480px" }}>
          Don&apos;t navigate this alone.
        </p>
        <span style={{ marginTop: "2rem", color: "#8B8AA0", fontSize: "0.875rem", border: "1px solid #9B6DFF33", borderRadius: "999px", padding: "0.4rem 1.2rem" }}>
          Coming Soon
        </span>
      </main>
      <Footer />
    </div>
  );
}
