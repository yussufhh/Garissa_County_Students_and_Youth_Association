import { useEffect, useState } from "react";

/* ─── Scroll-reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-el");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0", "translate-x-0");
            e.target.classList.remove("opacity-0", "translate-y-8", "-translate-x-8", "translate-x-8");
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Sub-county chapters data ─── */
const CHAPTERS = [
  {
    name: "Garissa Town",
    lead: "Chairperson's Office",
    phone: "+254 700 000 001",
    meets: "Every 1st Saturday, 10:00 AM",
    venue: "GACOSYA Secretariat, Garissa Town",
    color: "from-[#B3002D] to-[#ff6b8a]",
    icon: "🏙️",
  },
  {
    name: "Balambala",
    lead: "Chapter Representative",
    phone: "+254 700 000 002",
    meets: "Every 2nd Saturday, 9:00 AM",
    venue: "Balambala Youth Centre",
    color: "from-[#1e40af] to-[#3b82f6]",
    icon: "🌿",
  },
  {
    name: "Lagdera",
    lead: "Chapter Representative",
    phone: "+254 700 000 003",
    meets: "Every 2nd Sunday, 10:00 AM",
    venue: "Modogashe Community Hall",
    color: "from-[#065f46] to-[#10b981]",
    icon: "🌾",
  },
  {
    name: "Dadaab",
    lead: "Chapter Representative",
    phone: "+254 700 000 004",
    meets: "Every 3rd Saturday, 9:00 AM",
    venue: "Dadaab Town Library",
    color: "from-[#7c3aed] to-[#a78bfa]",
    icon: "📚",
  },
  {
    name: "Fafi",
    lead: "Chapter Representative",
    phone: "+254 700 000 005",
    meets: "Every 3rd Sunday, 10:00 AM",
    venue: "Bura Youth Centre",
    color: "from-[#b45309] to-[#fbbf24]",
    icon: "🌅",
  },
  {
    name: "Ijara",
    lead: "Chapter Representative",
    phone: "+254 700 000 006",
    meets: "Every 4th Saturday, 9:00 AM",
    venue: "Ijara District Offices",
    color: "from-[#9d174d] to-[#ec4899]",
    icon: "🦅",
  },
];

/* ─── Contact channels ─── */
const CHANNELS = [
  {
    icon: "📧",
    title: "General Enquiries",
    desc: "For general information, membership questions, and programme details.",
    value: "info@gacosya.or.ke",
    link: "mailto:info@gacosya.or.ke",
    linkLabel: "Send Email",
  },
  {
    icon: "🤝",
    title: "Partnerships & Sponsorship",
    desc: "To discuss collaboration, MoUs, or sponsoring GACOSYA programmes.",
    value: "partnerships@gacosya.or.ke",
    link: "mailto:partnerships@gacosya.or.ke",
    linkLabel: "Send Email",
  },
  {
    icon: "📋",
    title: "Programs & Events",
    desc: "To propose events, join programmes, or enquire about activities.",
    value: "programs@gacosya.or.ke",
    link: "mailto:programs@gacosya.or.ke",
    linkLabel: "Send Email",
  },
  {
    icon: "📱",
    title: "WhatsApp Community",
    desc: "Join our active WhatsApp community for real-time updates and announcements.",
    value: "+254 700 100 200",
    link: "https://wa.me/254700100200",
    linkLabel: "Join on WhatsApp",
  },
  {
    icon: "📰",
    title: "Media & Press",
    desc: "For media accreditation, press releases, and interview requests.",
    value: "media@gacosya.or.ke",
    link: "mailto:media@gacosya.or.ke",
    linkLabel: "Send Email",
  },
  {
    icon: "🙋",
    title: "Volunteer Coordination",
    desc: "Interested in volunteering? Reach our volunteers team directly.",
    value: "volunteer@gacosya.or.ke",
    link: "mailto:volunteer@gacosya.or.ke",
    linkLabel: "Send Email",
  },
];

/* ─── Social links ─── */
const SOCIALS = [
  { platform: "Facebook", icon: "f", handle: "@GACOSYAOfficial", link: "#", color: "hover:bg-[#1877f2]" },
  { platform: "Twitter / X", icon: "𝕏", handle: "@GACOSYA_KE", link: "#", color: "hover:bg-[#000]" },
  { platform: "Instagram", icon: "◎", handle: "@gacosya.ke", link: "#", color: "hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#bc1888]" },
  { platform: "LinkedIn", icon: "in", handle: "GACOSYA", link: "#", color: "hover:bg-[#0077b5]" },
  { platform: "TikTok", icon: "♪", handle: "@gacosya.ke", link: "#", color: "hover:bg-[#010101]" },
  { platform: "YouTube", icon: "▶", handle: "GACOSYA TV", link: "#", color: "hover:bg-[#ff0000]" },
];

/* ─── FAQ for contact page ─── */
const CONTACT_FAQS = [
  {
    q: "How quickly does GACOSYA respond to emails?",
    a: "We aim to respond to all emails within 2–3 working days. For urgent matters, WhatsApp is the fastest channel.",
  },
  {
    q: "Can I visit the GACOSYA Secretariat in person?",
    a: "Yes. Our Secretariat in Garissa Town is open Monday to Friday, 8:00 AM – 5:00 PM. Walk-ins are welcome, though appointments are recommended for leadership meetings.",
  },
  {
    q: "I'm not from Garissa — can I still partner with GACOSYA?",
    a: "Absolutely. We welcome partnerships with organisations, professionals, and individuals from across Kenya and internationally, provided the partnership benefits Garissa youth.",
  },
  {
    q: "How do I find my nearest sub-county chapter?",
    a: "Each chapter is listed on this page with contact details and meeting schedules. You can also WhatsApp us at +254 700 100 200 and we'll connect you to the right chapter lead.",
  },
];

/* ─── Contact Form Component ─── */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", category: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const CATEGORIES = [
    "General Enquiry",
    "Membership Application",
    "Programme Information",
    "Partnership / Sponsorship",
    "Volunteer Interest",
    "Media / Press",
    "Event Proposal",
    "Other",
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const inputClass = "w-full bg-white/[0.05] border border-white/15 rounded-xl px-5 py-3.5 text-white text-sm placeholder-white/30 outline-none focus:border-[rgba(179,0,45,0.6)] focus:bg-white/[0.07] transition-all";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] flex items-center justify-center text-4xl mb-6 animate-bounce">
          ✅
        </div>
        <h3 className="font-['Playfair_Display',serif] text-2xl text-white mb-3">Message Sent!</h3>
        <p className="text-white/55 text-sm leading-relaxed max-w-xs">
          Thank you, <strong className="text-white">{form.name}</strong>. We've received your message and will respond within 2–3 working days.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", category: "", message: "" }); }}
          className="mt-8 text-[#ff6b8a] text-sm font-semibold hover:text-white transition-colors cursor-pointer bg-transparent border-none"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Full Name *</label>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Email Address *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Phone / WhatsApp</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+254 700 000 000" className={inputClass} />
        </div>
        <div>
          <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Category *</label>
          <select required name="category" value={form.category} onChange={handleChange} className={`${inputClass} cursor-pointer`} style={{ appearance: "none" }}>
            <option value="" disabled style={{ background: "#0d1421" }}>Select a category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c} style={{ background: "#0d1421" }}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Subject *</label>
        <input required name="subject" value={form.subject} onChange={handleChange} placeholder="Brief subject of your message" className={inputClass} />
      </div>

      <div>
        <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Message *</label>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us more about your enquiry, idea, or proposal. Include any relevant details that will help us respond effectively."
          rows={6}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#B3002D] text-white py-4 rounded-xl font-bold text-base hover:bg-[#8a0022] hover:shadow-[0_8px_28px_rgba(179,0,45,0.45)] hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending…
            </span>
          ) : (
            "Send Message →"
          )}
        </button>
        <p className="text-white/25 text-xs text-center mt-3">We typically respond within 2–3 working days.</p>
      </div>
    </form>
  );
}

/* ─── FAQ Item ─── */
function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-[rgba(179,0,45,0.25)] transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-transparent border-none cursor-pointer"
      >
        <span className="text-white font-semibold text-sm leading-relaxed pr-4">{faq.q}</span>
        <span className={`text-[#B3002D] text-xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
      </button>
      <div style={{ maxHeight: isOpen ? "200px" : "0", overflow: "hidden", transition: "max-height 0.4s ease, padding 0.3s ease" }}>
        <p className="text-white/55 text-sm leading-relaxed px-6 pb-6">{faq.a}</p>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Contacts() {
  useReveal();
  const [activeFaq, setActiveFaq] = useState(null);

  const fadeUp    = "reveal-el opacity-0 translate-y-8 transition-all duration-700 ease-out";
  const fadeLeft  = "reveal-el opacity-0 -translate-x-8 transition-all duration-700 ease-out";
  const fadeRight = "reveal-el opacity-0 translate-x-8 transition-all duration-700 ease-out";

  return (
    <div className="font-['Outfit',sans-serif] text-[#111827] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
        @keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes spin     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .pulse-dot   { animation: pulse-dot 2s infinite; }
        .marquee     { animation: marquee 30s linear infinite; }
        .animate-spin { animation: spin 1s linear infinite; }
        .animate-bounce { animation: bounce 1s ease infinite; }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        select option { color: white; }
      `}</style>

      {/* ── HERO ───────────────────────────────────── */}
      <section className="min-h-[60vh] relative flex items-center bg-[#111827] overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_30%_50%,rgba(179,0,45,0.16)_0%,transparent_60%),linear-gradient(135deg,#0a0f1a_0%,#111827_60%,#1a0a10_100%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
          <div className={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              <span className="pulse-dot w-1.5 h-1.5 bg-[#B3002D] rounded-full" />
              Get in Touch
            </div>
            <h1 className="playfair text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-6 max-w-4xl">
              We're{" "}
              <em className="text-[#B3002D] not-italic">Here for You</em> —<br />
              Let's Connect
            </h1>
            <p className="text-white/60 text-lg leading-[1.8] max-w-2xl mb-12">
              Whether you're a young person looking to join, an organisation seeking to partner, or a professional wanting to give back — GACOSYA is always ready to listen. Reach us through any of the channels below.
            </p>

            {/* Quick contact pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "📧 info@gacosya.or.ke", href: "mailto:info@gacosya.or.ke" },
                { label: "📱 +254 700 100 200", href: "https://wa.me/254700100200" },
                { label: "📍 Garissa Town, Kenya", href: "#location" },
              ].map((p) => (
                <a key={p.label} href={p.href} className="bg-white/[0.06] border border-white/15 text-white/70 px-5 py-2.5 rounded-full text-sm font-medium no-underline hover:bg-white/[0.12] hover:text-white hover:border-white/30 transition-all">
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────── */}
      <div className="bg-[#B3002D] py-3 overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8">
              {["Get in Touch", "Join GACOSYA", "Partner With Us", "Volunteer", "Collaborate", "Garissa County", "Youth Empowerment", "Connect"].map((w) => (
                <span key={w} className="text-white font-semibold text-sm tracking-widest uppercase flex items-center gap-4">
                  {w} <span className="text-white/40">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── CONTACT CHANNELS ────────────────────────── */}
      <section className="py-24 bg-[#0d1421] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(179,0,45,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center max-w-2xl mx-auto mb-16`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Contact Channels
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              Multiple Ways to{" "}
              <em className="text-[#B3002D] not-italic">Reach Us</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              Choose the channel that works best for you. Every message is read and responded to by a real member of the GACOSYA team.
            </p>
          </div>

          <div className={`${fadeUp} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}>
            {CHANNELS.map((ch) => (
              <div key={ch.title} className="bg-white/[0.04] border border-white/10 rounded-3xl p-7 hover:bg-white/[0.07] hover:border-[rgba(179,0,45,0.25)] transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(179,0,45,0.1)] border border-[rgba(179,0,45,0.2)] flex items-center justify-center text-2xl mb-5">
                  {ch.icon}
                </div>
                <h3 className="playfair text-lg text-white mb-2 group-hover:text-[#ff6b8a] transition-colors">{ch.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{ch.desc}</p>
                <div className="text-[#ff6b8a] text-sm font-semibold mb-4 break-all">{ch.value}</div>
                <a href={ch.link} target={ch.link.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="inline-flex items-center gap-1.5 bg-[rgba(179,0,45,0.1)] border border-[rgba(179,0,45,0.25)] text-[#ff6b8a] px-4 py-2 rounded-full text-xs font-bold tracking-wide no-underline hover:bg-[#B3002D] hover:text-white hover:border-[#B3002D] transition-all">
                  {ch.linkLabel} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM + INFO ─────────────────────── */}
      <section className="py-24 bg-[#111827] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(179,0,45,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
            {/* Left — Info panel */}
            <div className={`${fadeLeft} lg:col-span-2 flex flex-col gap-8`}>
              <div>
                <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
                  Send Us a Message
                </div>
                <h2 className="playfair text-4xl text-white leading-tight mb-4">
                  We Read <em className="text-[#B3002D] not-italic">Every Message</em>
                </h2>
                <p className="text-white/55 text-base leading-relaxed">
                  Fill in the form and a member of the GACOSYA team will get back to you within 2–3 working days. For urgent matters, WhatsApp is fastest.
                </p>
              </div>

              {/* Office info */}
              <div id="location" className="bg-white/[0.04] border border-white/10 rounded-3xl p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B3002D] to-transparent" />
                <h3 className="playfair text-xl text-white mb-5">GACOSYA Secretariat</h3>
                <div className="space-y-4">
                  {[
                    { icon: "📍", label: "Address", value: "Garissa Town, Garissa County, Kenya" },
                    { icon: "🕐", label: "Office Hours", value: "Mon – Fri: 8:00 AM – 5:00 PM" },
                    { icon: "📅", label: "Weekend", value: "Sat: 9:00 AM – 1:00 PM (By appointment)" },
                    { icon: "📞", label: "Main Line", value: "+254 700 100 200" },
                    { icon: "📧", label: "General Email", value: "info@gacosya.or.ke" },
                    { icon: "📮", label: "P.O. Box", value: "P.O. Box 123-70100, Garissa" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-[#B3002D] text-base mt-0.5 flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="text-white/35 text-[0.65rem] font-bold tracking-widest uppercase mb-0.5">{item.label}</div>
                        <div className="text-white/75 text-sm">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response commitment */}
              <div className="bg-[rgba(179,0,45,0.08)] border border-[rgba(179,0,45,0.2)] rounded-2xl p-6">
                <div className="text-3xl mb-3">⏱️</div>
                <h4 className="text-white font-semibold mb-2">Our Response Commitment</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  We aim to respond to all enquiries within <strong className="text-[#ff6b8a]">2–3 working days</strong>. Partnership and media requests are prioritised. WhatsApp responses within <strong className="text-[#ff6b8a]">24 hours</strong>.
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div className={`${fadeRight} lg:col-span-3`}>
              <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B3002D] to-transparent" />
                <h3 className="playfair text-2xl text-white mb-2">Get in Touch</h3>
                <p className="text-white/45 text-sm mb-8">All fields marked * are required.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUB-COUNTY CHAPTERS ─────────────────────── */}
      <section className="py-24 bg-[#0d1421] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(179,0,45,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center max-w-2xl mx-auto mb-16`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Sub-County Chapters
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              Find Your{" "}
              <em className="text-[#B3002D] not-italic">Local Chapter</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              GACOSYA has active chapters across all six sub-counties of Garissa. Find yours, attend a meeting, and connect with youth in your area.
            </p>
          </div>

          <div className={`${fadeUp} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}>
            {CHAPTERS.map((ch) => (
              <div key={ch.name} className="bg-white/[0.04] border border-white/10 rounded-3xl p-7 hover:bg-white/[0.07] hover:border-[rgba(179,0,45,0.25)] transition-all group">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ch.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {ch.icon}
                  </div>
                  <div>
                    <div className="text-white/35 text-[0.65rem] font-bold tracking-widest uppercase">Sub-County</div>
                    <h3 className="playfair text-xl text-white group-hover:text-[#ff6b8a] transition-colors">{ch.name}</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#B3002D] text-sm mt-0.5 flex-shrink-0">👤</span>
                    <span className="text-white/60 text-sm">{ch.lead}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#B3002D] text-sm mt-0.5 flex-shrink-0">📞</span>
                    <a href={`tel:${ch.phone}`} className="text-white/60 text-sm hover:text-[#ff6b8a] transition-colors no-underline">{ch.phone}</a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#B3002D] text-sm mt-0.5 flex-shrink-0">📅</span>
                    <span className="text-white/60 text-sm">{ch.meets}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#B3002D] text-sm mt-0.5 flex-shrink-0">📍</span>
                    <span className="text-white/60 text-sm">{ch.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA ────────────────────────────── */}
      <section className="py-24 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(179,0,45,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center max-w-2xl mx-auto mb-16`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Follow Us
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              Stay Connected on{" "}
              <em className="text-[#B3002D] not-italic">Social Media</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              Follow GACOSYA for daily updates, youth stories, event highlights, and opportunities — straight from the heart of Garissa.
            </p>
          </div>

          <div className={`${fadeUp} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4`}>
            {SOCIALS.map((s) => (
              <a
                key={s.platform}
                href={s.link}
                className={`bg-white/[0.04] border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 no-underline hover:border-[rgba(179,0,45,0.35)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all group ${s.color}`}
              >
                <div className="text-2xl font-bold text-white/70 group-hover:text-white transition-colors">{s.icon}</div>
                <div className="text-center">
                  <div className="text-white/35 text-[0.6rem] font-bold tracking-widest uppercase">{s.platform}</div>
                  <div className="text-white/65 text-xs mt-0.5 group-hover:text-white transition-colors">{s.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section className="py-24 bg-[#0d1421] relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-8">
          <div className={`${fadeUp} text-center mb-14`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Common Questions
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              Frequently Asked{" "}
              <em className="text-[#B3002D] not-italic">Questions</em>
            </h2>
            <p className="text-white/50 text-base">Quick answers to common questions about reaching and working with GACOSYA.</p>
          </div>

          <div className={`${fadeUp} flex flex-col gap-4`}>
            {CONTACT_FAQS.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} isOpen={activeFaq === i} onToggle={() => setActiveFaq(activeFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ──────────────────────────── */}
      <section className="py-28 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(179,0,45,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px)" }} />
        <div className="relative z-10 max-w-[800px] mx-auto px-8 text-center">
          <div className={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-8">
              <span className="pulse-dot w-1.5 h-1.5 bg-[#B3002D] rounded-full" />
              Join the Movement
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-6">
              Garissa's Youth Future is{" "}
              <em className="text-[#B3002D] not-italic">Being Built Now</em>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Every great change starts with a conversation. Reach out today — and become part of the generation that transforms Garissa County forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@gacosya.or.ke" className="bg-[#B3002D] text-white px-10 py-4 rounded-full font-bold text-base no-underline hover:bg-[#8a0022] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(179,0,45,0.45)] transition-all">
                Send Us a Message
              </a>
              <a href="https://wa.me/254700100200" target="_blank" rel="noreferrer" className="bg-transparent text-white px-10 py-4 rounded-full font-semibold text-base no-underline border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all">
                WhatsApp Us →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}