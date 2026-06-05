import React from "react";
import logo from "../assets/gacosya.jpeg";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Programs", href: "#programs" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#0a0f1a] border-t border-white/[0.08]"
    >
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-3 no-underline mb-5">
              <img
                src={logo}
                alt="GACOSYA Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col leading-none">
                <span className="playfair text-lg text-white font-bold tracking-wide">
                  GACOSYA
                </span>
                <span className="text-[0.62rem] text-white/60 tracking-widest uppercase mt-0.5">
                  Garissa County
                </span>
              </div>
            </a>

            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              Garissa County Students and Youth Association — uniting,
              empowering, and elevating the youth of Garissa County since August
              2024.
            </p>

            <div className="flex gap-3">
              {[
                { label: "TW", href: "#" },
                { label: "FB", href: "#" },
                { label: "IG", href: "#" },
                { label: "WA", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/50 text-xs font-bold no-underline hover:bg-[#B3002D] hover:text-white hover:border-[#B3002D] transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h5>

            <ul className="flex flex-col gap-3 list-none">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/45 text-sm no-underline hover:text-[#ff6b8a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Contact
            </h5>

            <ul className="flex flex-col gap-4 list-none">
              {[
                {
                  icon: "📍",
                  text: "Garissa Town, Garissa County, Kenya",
                },
                {
                  icon: "📧",
                  text: "info@gacosya.or.ke",
                },
                {
                  icon: "📞",
                  text: "+254 700 000 000",
                },
                {
                  icon: "🌐",
                  text: "www.gacosya.or.ke",
                },
              ].map((contact) => (
                <li
                  key={contact.text}
                  className="flex items-start gap-3 text-white/45 text-sm"
                >
                  <span>{contact.icon}</span>
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <span>
            © {new Date().getFullYear()} GACOSYA — Garissa County Students and
            Youth Association. All rights reserved.
          </span>

          <span>Built with 🤍 by and for Garissa Youth</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;