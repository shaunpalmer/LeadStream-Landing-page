import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(180deg, #0a0f1c, #0f172a)",
      color: "#fff",
      textAlign: "center",
      padding: "2rem"
    }}>
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          404
        </h1>

        <p style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.8 }}>
          Sorry, this page doesn&apos;t exist.
        </p>

        <Link
          href="/"
          style={{
            padding: "0.75rem 1.5rem",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            borderRadius: "8px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "600",
            display: "inline-block"
          }}
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
