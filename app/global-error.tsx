"use client";

export default function GlobalError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "#fff",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 style={{ fontSize: "2rem", color: "#231F20" }}>
            Algo salió mal · Something went wrong
          </h1>
          <p style={{ color: "#6B7280", marginTop: "0.5rem" }}>
            Por favor intenta de nuevo · Please try again
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 1.5rem",
              background: "#168f8a",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
            type="button"
          >
            Intentar de nuevo · Try again
          </button>
        </div>
      </body>
    </html>
  );
}
