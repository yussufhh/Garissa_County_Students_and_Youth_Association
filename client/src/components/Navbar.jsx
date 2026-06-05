
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gacosya.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", isRoute: true },
    { label: "About", href: "/about", isRoute: false },
    { label: "Programs", href: "/programs", isRoute: false },
    { label: "Leadership", href: "/leadership", isRoute: false },
    { label: "Events", href: "/events", isRoute: false },
    { label: "Contact", href: "/contact", isRoute: false },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }

        .nav-link-item {
          position: relative;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.025em;
          transition: color 0.2s;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: #B3002D;
          transform: scaleX(0);
          transition: transform 0.2s;
        }
        .nav-link-item:hover {
          color: #ffffff;
        }
        .nav-link-item:hover::after {
          transform: scaleX(1);
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .pulse-dot { animation: pulse-dot 2s infinite; }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: #111827;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
        }
        .mobile-nav-link {
          font-family: 'Playfair Display', serif;
          color: #ffffff;
          font-size: 2rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .mobile-nav-link:hover {
          color: #ff6b8a;
        }

        .navbar-divider {
          width: 1px;
          height: 20px;
          background: rgba(255,255,255,0.12);
          margin: 0 4px;
        }
      `}</style>

      {/* ── MOBILE MENU OVERLAY ── */}
      {mobileOpen && (
        <div className="mobile-overlay">
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
              color: "white",
              fontSize: "2rem",
              lineHeight: 1,
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Mobile brand mark */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "1rem" }}>
            <img src={logo} alt="GACOSYA" style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", marginBottom: 10 }} />
            <span style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: "1.25rem", letterSpacing: "0.05em" }}>GACOSYA</span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 2 }}>Garissa County</span>
          </div>

          {navLinks.map((l) =>
            l.isRoute ? (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-nav-link"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-nav-link"
              >
                {l.label}
              </a>
            )
          )}

          {/* Mobile CTA */}
          <a
            href="/#cta"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: "0.5rem",
              background: "#B3002D",
              color: "white",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Join Community
          </a>
        </div>
      )}

      {/* ── MAIN NAVBAR ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s ease",
          padding: scrolled ? "0.75rem 0" : "1.25rem 0",
          background: scrolled ? "rgba(17,24,39,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── LOGO / BRAND ── */}
          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
          >
            <img
              src={logo}
              alt="GACOSYA Logo"
              style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span
                className="playfair"
                style={{ fontSize: "1.125rem", color: "white", fontWeight: 700, letterSpacing: "0.04em" }}
              >
                GACOSYA
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: 3,
                }}
              >
                Garissa County
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV LINKS ── */}
          <ul
            style={{
              display: "none",
              alignItems: "center",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="lg-flex"
          >
            {/* Inline CSS trick: use a style tag for lg breakpoint since we're in JSX */}
            <style>{`
              @media (min-width: 1024px) {
                .lg-flex { display: flex !important; }
                .lg-hidden { display: none !important; }
                .lg-inline-block { display: inline-block !important; }
              }
            `}</style>

            {navLinks.map((l) => (
              <li key={l.label}>
                {l.isRoute ? (
                  <Link to={l.href} className="nav-link-item">
                    {l.label}
                  </Link>
                ) : (
                  <a href={l.href} className="nav-link-item">
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* ── RIGHT SIDE ACTIONS ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Live indicator pill */}
            <div
              className="lg-inline-block"
              style={{
                display: "none",
                alignItems: "center",
                gap: 6,
                background: "rgba(179,0,45,0.12)",
                border: "1px solid rgba(179,0,45,0.25)",
                color: "#ff6b8a",
                padding: "4px 12px",
                borderRadius: 9999,
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  background: "#B3002D",
                  borderRadius: "50%",
                }}
              />
              Est. 2024
            </div>

            {/* Join CTA button */}
            <a
              href="/#cta"
              className="lg-inline-block"
              style={{
                display: "none",
                background: "#B3002D",
                color: "white",
                padding: "0.5rem 1.25rem",
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.03em",
                textDecoration: "none",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8a0022";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(179,0,45,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#B3002D";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Join Community
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg-hidden"
              aria-label="Open menu"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                cursor: "pointer",
                padding: 4,
                background: "transparent",
                border: "none",
              }}
            >
              <span style={{ display: "block", width: 24, height: 2, background: "white", borderRadius: 2 }} />
              <span style={{ display: "block", width: 24, height: 2, background: "white", borderRadius: 2 }} />
              <span style={{ display: "block", width: 24, height: 2, background: "white", borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}