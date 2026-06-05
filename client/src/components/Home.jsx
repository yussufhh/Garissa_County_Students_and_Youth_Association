import { useEffect, useRef, useState } from "react";
import logo from "../assets/gacosya.jpeg";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-el");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0", "translate-x-0");
            e.target.classList.remove(
              "opacity-0",
              "translate-y-8",
              "-translate-x-8",
              "translate-x-8"
            );
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function HomePage() {
  useReveal();

  const [activeProgram, setActiveProgram] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Leadership", href: "#leadership" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#footer" },
  ];

  const fadeUp = "reveal-el opacity-0 translate-y-8 transition-all duration-700 ease-out";
  const fadeLeft = "reveal-el opacity-0 -translate-x-8 transition-all duration-700 ease-out";
  const fadeRight = "reveal-el opacity-0 translate-x-8 transition-all duration-700 ease-out";

  const programs = [
    {
      icon: "🎓",
      title: "Education & Mentorship",
      desc: "Connecting young people with experienced mentors across academia, business, and public service to build careers and ignite ambition.",
      tags: ["Scholarships", "Tutoring", "Career Talks"],
    },
    {
      icon: "💡",
      title: "Innovation & Entrepreneurship",
      desc: "Nurturing the next wave of Garissa entrepreneurs through ideation bootcamps, seed funding support, and business development workshops.",
      tags: ["Bootcamps", "Seed Support", "Pitching"],
    },
    {
      icon: "🌍",
      title: "Civic Engagement",
      desc: "Training youth leaders to actively participate in governance, community planning, and county-level decision-making processes.",
      tags: ["Leadership", "Policy", "Community"],
    },
    {
      icon: "💪",
      title: "Sports & Wellness",
      desc: "Organising inter-sub-county tournaments, mental health dialogues, and wellness programs to keep our youth physically and mentally thriving.",
      tags: ["Tournaments", "Mental Health", "Fitness"],
    },
    {
      icon: "🎨",
      title: "Arts & Culture",
      desc: "Celebrating and documenting the rich cultural heritage of Garissa through poetry, music, visual arts, and storytelling festivals.",
      tags: ["Poetry", "Music", "Storytelling"],
    },
    {
      icon: "📡",
      title: "Digital Skills",
      desc: "Equipping youth with 21st-century digital literacy — from coding and data to social media strategy and digital entrepreneurship.",
      tags: ["Coding", "Data", "Digital Biz"],
    },
  ];

  const leaders = [
    {
      name: "Abdirahman Hassan",
      role: "Chairperson",
      bio: "Visionary leader and community organiser with a decade of youth advocacy experience across Northern Kenya.",
      initials: "AH",
      color: "from-[#B3002D] to-[#ff6b8a]",
    },
    {
      name: "Fatuma Mohamed",
      role: "Secretary General",
      bio: "Former student leader and governance expert dedicated to transparent, accountable youth institutions.",
      initials: "FM",
      color: "from-[#1e40af] to-[#3b82f6]",
    },
    {
      name: "Omar Aden",
      role: "Treasurer",
      bio: "Finance professional committed to financial discipline and resource mobilisation for youth-led initiatives.",
      initials: "OA",
      color: "from-[#065f46] to-[#10b981]",
    },
    {
      name: "Hodan Warsame",
      role: "Programs Director",
      bio: "Development practitioner specialising in education, gender equity, and inclusive youth programming.",
      initials: "HW",
      color: "from-[#7c3aed] to-[#a78bfa]",
    },
    {
      name: "Yusuf Bare",
      role: "Communications Lead",
      bio: "Digital strategist and journalist amplifying grassroots voices through storytelling and media engagement.",
      initials: "YB",
      color: "from-[#b45309] to-[#fbbf24]",
    },
    {
      name: "Nasteho Ali",
      role: "Women's Caucus Lead",
      bio: "Champion for gender equality driving initiatives that empower young women in Garissa County.",
      initials: "NA",
      color: "from-[#9d174d] to-[#ec4899]",
    },
  ];

  const events = [
    {
      date: { day: "14", month: "JUL" },
      title: "Annual Youth Summit 2025",
      loc: "Garissa University Grounds",
      type: "Summit",
      desc: "Our flagship gathering bringing together youth, county officials, and development partners for a full day of dialogue and action planning.",
    },
    {
      date: { day: "02", month: "AUG" },
      title: "Innovation Bootcamp",
      loc: "GACOSYA Innovation Hub",
      type: "Workshop",
      desc: "A 3-day intensive entrepreneurship and technology workshop for youth aged 18–35 across all sub-counties.",
    },
    {
      date: { day: "20", month: "AUG" },
      title: "Inter-Sub-County Sports Day",
      loc: "Garissa Stadium",
      type: "Sports",
      desc: "A competitive and celebratory sporting event fostering unity and healthy competition among youth representatives.",
    },
    {
      date: { day: "12", month: "SEP" },
      title: "Mental Health Dialogue",
      loc: "County Hall Conference Room",
      type: "Dialogue",
      desc: "An open forum on youth mental health, substance abuse awareness, and peer-to-peer support systems.",
    },
  ];

  const features = [
    {
      icon: "🗺️",
      title: "County-Wide Reach",
      desc: "Active chapters in all 6 sub-counties — Garissa, Balambala, Lagdera, Dadaab, Fafi, and Ijara — ensuring no youth is left behind.",
    },
    {
      icon: "🤝",
      title: "Inclusive by Design",
      desc: "Built to represent all backgrounds, genders, and communities within Garissa County with equal voice and representation.",
    },
    {
      icon: "📊",
      title: "Accountable Leadership",
      desc: "A transparent governance structure with elected officials, public financial reporting, and term-limited positions.",
    },
    {
      icon: "🚀",
      title: "Action-Oriented",
      desc: "We move from talk to action — every program has a clear implementation plan, measurable outcomes, and community accountability.",
    },
    {
      icon: "🔗",
      title: "Strategic Partnerships",
      desc: "Collaborating with Garissa County Government, NGOs, universities, and private sector actors to maximise our impact.",
    },
    {
      icon: "🌱",
      title: "Sustainable Future",
      desc: "Building lasting institutions — not temporary projects — that will continue serving Garissa youth for generations to come.",
    },
  ];

  const faqs = [
    {
      q: "Who can join GACOSYA?",
      a: "GACOSYA is open to all youth aged 18–35 who originate from or reside in Garissa County. Membership is free, and we welcome youth from all backgrounds, professions, and walks of life.",
    },
    {
      q: "How do I become a member?",
      a: "You can register through our online form, attend any of our sub-county chapter meetings, or reach out via WhatsApp or email. We'll connect you to the chapter closest to you.",
    },
    {
      q: "Is GACOSYA affiliated with any political party?",
      a: "No. GACOSYA is strictly non-partisan. We engage with political processes to advocate for youth interests but do not affiliate with, endorse, or campaign for any political party or candidate.",
    },
    {
      q: "How are GACOSYA's activities funded?",
      a: "We are funded through membership contributions, grants from development partners, county government allocations, and fundraising events. All funds are managed transparently with published accounts.",
    },
    {
      q: "Can I volunteer without being a formal member?",
      a: "Absolutely. We welcome volunteers, professionals, and allies who want to contribute their skills and time to specific programmes even without full membership.",
    },
  ];

  const stats = [
    { num: "6", label: "Sub-County Chapters", icon: "🗺️" },
    { num: "1K+", label: "Youth Reached", icon: "👥" },
    { num: "7+", label: "Active Programs", icon: "📋" },
    { num: "12+", label: "Partner Organisations", icon: "🤝" },
    { num: "3", label: "Annual Summits Held", icon: "🎤" },
    { num: "500+", label: "Scholarships Facilitated", icon: "🎓" },
  ];

  const typeColors = {
    Summit: "bg-[rgba(179,0,45,0.15)] text-[#ff6b8a] border-[rgba(179,0,45,0.3)]",
    Workshop: "bg-[rgba(30,64,175,0.2)] text-[#93c5fd] border-[rgba(30,64,175,0.3)]",
    Sports: "bg-[rgba(6,95,70,0.2)] text-[#6ee7b7] border-[rgba(6,95,70,0.3)]",
    Dialogue: "bg-[rgba(124,58,237,0.2)] text-[#c4b5fd] border-[rgba(124,58,237,0.3)]",
  };

  return (
    <div className="font-['Outfit',sans-serif] text-[#111827] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-slow-rev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
        @keyframes scroll-line { 0%{height:10px;opacity:0} 50%{height:40px;opacity:1} 100%{height:10px;opacity:0} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .spin-slow-rev { animation: spin-slow-rev 20s linear infinite; }
        .float1 { animation: float1 4s ease-in-out infinite; }
        .float2 { animation: float2 5s ease-in-out infinite; }
        .pulse-dot { animation: pulse-dot 2s infinite; }
        .scroll-line { animation: scroll-line 2s ease-in-out infinite; }
        .marquee { animation: marquee 30s linear infinite; }
        .program-card { transition: all 0.3s ease; }
        .program-card:hover { transform: translateY(-6px); }
        .leader-card:hover .leader-avatar { transform: scale(1.05); }
        .leader-avatar { transition: transform 0.3s ease; }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.3s ease; }
        .faq-answer.open { max-height: 200px; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="hero" className="min-h-screen relative flex items-center bg-[#111827] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(179,0,45,0.18)_0%,transparent_60%),radial-gradient(ellipse_60%_80%_at_10%_80%,rgba(179,0,45,0.08)_0%,transparent_50%),linear-gradient(135deg,#0a0f1a_0%,#111827_50%,#1a0a10_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px)",
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-8 pt-32 pb-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              <span className="pulse-dot w-1.5 h-1.5 bg-[#B3002D] rounded-full" />
              Est. August 2024 · Garissa County, Kenya
            </div>

            <h1 className="playfair text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.1] mb-6">
              Empowering the{" "}
              <em className="text-[#B3002D] not-italic">Next Generation</em> of
              Leaders in Garissa
            </h1>
            <p className="text-white/65 text-lg leading-[1.75] mb-10 max-w-xl">
              Building a united, educated, innovative, and empowered youth community across Garissa County and beyond — through collaboration, mentorship, and collective action.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a href="#cta" className="bg-[#B3002D] text-white px-8 py-3.5 rounded-full font-bold text-base no-underline hover:bg-[#8a0022] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(179,0,45,0.45)] transition-all">
                Join Us Today
              </a>
              <a href="#programs" className="bg-transparent text-white px-8 py-3.5 rounded-full font-semibold text-base no-underline border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all">
                Explore Programs
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { num: "6", label: "Sub-County Chapters" },
                { num: "1K+", label: "Youth Reached" },
                { num: "2024", label: "Established" },
                { num: "7+", label: "Active Programs" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="playfair text-3xl text-white font-black">{s.num}</div>
                  <div className="text-[0.72rem] text-white/50 mt-1 uppercase tracking-[0.06em]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — logo ring */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="spin-slow w-[360px] h-[360px] rounded-full border-2 border-[rgba(179,0,45,0.25)] flex items-center justify-center">
                <div className="spin-slow-rev w-[300px] h-[300px] rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center backdrop-blur-md">
                  <img src={logo} alt="GACOSYA Logo" className="w-[220px] h-[220px] object-contain rounded-full" />
                </div>
              </div>
              <div className="float1 absolute top-5 -left-8 bg-[rgba(17,24,39,0.85)] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md text-white text-sm whitespace-nowrap">
                <strong className="block text-base text-[#B3002D]">🤝 Unity</strong>
                Across all 6 sub-counties
              </div>
              <div className="float2 absolute bottom-10 -right-5 bg-[rgba(17,24,39,0.85)] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md text-white text-sm whitespace-nowrap">
                <strong className="block text-base text-[#B3002D]">🎓 Education</strong>
                Mentorship &amp; Leadership
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>Scroll to explore</span>
          <div className="scroll-line w-px bg-gradient-to-b from-transparent to-white/40" />
        </div>
      </section>

      {/* ── MARQUEE TICKER ───────────────────────────────────── */}
      <div className="bg-[#B3002D] py-3 overflow-hidden">
        <div className="flex marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8">
              {["Unity", "Education", "Innovation", "Empowerment", "Mentorship", "Leadership", "Community", "Progress", "Garissa County"].map((w) => (
                <span key={w} className="text-white font-semibold text-sm tracking-widest uppercase flex items-center gap-4">
                  {w} <span className="text-white/40">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section id="about" className="py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(179,0,45,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left — visual block */}
            <div className={`${fadeLeft} relative`}>
              <div className="relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 p-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B3002D] to-transparent" />
                <div className="text-7xl mb-6">🌍</div>
                <h3 className="playfair text-3xl text-white mb-4">Our Vision</h3>
                <p className="text-white/60 leading-relaxed">
                  A Garissa County where every young person — regardless of background, gender, or sub-county — has the resources, networks, and confidence to lead and thrive.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="playfair text-3xl text-white mb-4">Our Mission</h3>
                  <p className="text-white/60 leading-relaxed">
                    To organise, educate, and empower Garissa youth through structured programs, advocacy, and inclusive community-building that drives sustainable county development.
                  </p>
                </div>
                {/* Decorative corner */}
                <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full border-2 border-[rgba(179,0,45,0.2)] flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[rgba(179,0,45,0.2)]" />
                </div>
              </div>
            </div>

            {/* Right — text */}
            <div className={fadeRight}>
              <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
                Who We Are
              </div>
              <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-6">
                Born from Garissa,{" "}
                <em className="text-[#B3002D] not-italic">Built for Garissa</em>
              </h2>
              <p className="text-white/65 text-base leading-[1.85] mb-6">
                GACOSYA — the Garissa County Students and Youth Association — was founded in August 2024 by a group of passionate young people who believed that Garissa's greatest untapped resource is its youth. We are a non-partisan, community-driven organisation operating across all six sub-counties.
              </p>
              <p className="text-white/65 text-base leading-[1.85] mb-10">
                From scholarship drives and civic education to innovation hubs and cultural festivals, GACOSYA is the connective tissue linking Garissa's ambitious youth with the opportunities, mentors, and platforms they deserve. Every initiative we run is designed by youth, for youth, and accountable to our community.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "✅", text: "Non-partisan and community-led organisation" },
                  { icon: "✅", text: "Fully youth-governed with elected leadership" },
                  { icon: "✅", text: "Operational across all 6 sub-counties" },
                  { icon: "✅", text: "Transparent financial and program reporting" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-[#B3002D] text-lg mt-0.5">{item.icon}</span>
                    <span className="text-white/75 text-sm leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ─────────────────────────────────────── */}
      <section className="py-20 bg-[#0d1421] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_50%,rgba(179,0,45,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center mb-14`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-4">
              Our Impact in Numbers
            </div>
            <h2 className="playfair text-4xl text-white">A Growing Movement</h2>
          </div>
          <div className={`${fadeUp} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4`}>
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-[rgba(179,0,45,0.3)] transition-all group"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="playfair text-4xl text-white font-black group-hover:text-[#ff6b8a] transition-colors">{s.num}</div>
                <div className="text-[0.72rem] text-white/45 mt-2 uppercase tracking-[0.06em] leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section id="features" className="py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(179,0,45,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center max-w-2xl mx-auto mb-16`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Why GACOSYA
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              What Makes Us <em className="text-[#B3002D] not-italic">Different</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              We are not just another youth group. GACOSYA is a structured, accountable, and impact-driven organisation built to last.
            </p>
          </div>

          <div className={`${fadeUp} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {features.map((f, i) => (
              <div
                key={f.title}
                className="program-card bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-[rgba(179,0,45,0.25)] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[rgba(179,0,45,0.1)] border border-[rgba(179,0,45,0.2)] flex items-center justify-center text-2xl mb-6">
                  {f.icon}
                </div>
                <h3 className="playfair text-xl text-white mb-3 group-hover:text-[#ff6b8a] transition-colors">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────── */}
      <section id="programs" className="py-32 bg-[#0d1421] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(179,0,45,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center max-w-2xl mx-auto mb-16`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Our Programs
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              Six Pillars of{" "}
              <em className="text-[#B3002D] not-italic">Youth Empowerment</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              Our programs are designed around the real needs and aspirations of Garissa youth — from education and business to arts and digital skills.
            </p>
          </div>

          <div className={`${fadeUp} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {programs.map((p, i) => (
              <div
                key={p.title}
                className="program-card bg-white/[0.04] border border-white/10 rounded-3xl p-8 cursor-pointer hover:bg-white/[0.08] hover:border-[rgba(179,0,45,0.3)] group"
                onClick={() => setActiveProgram(i)}
              >
                <div className="w-14 h-14 rounded-2xl bg-[rgba(179,0,45,0.1)] border border-[rgba(179,0,45,0.2)] flex items-center justify-center text-2xl mb-6">
                  {p.icon}
                </div>
                <h3 className="playfair text-xl text-white mb-3 group-hover:text-[#ff6b8a] transition-colors">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[0.7rem] bg-[rgba(179,0,45,0.1)] border border-[rgba(179,0,45,0.2)] text-[#ff6b8a] px-3 py-1 rounded-full font-semibold tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ───────────────────────────────────────── */}
      <section id="leadership" className="py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(179,0,45,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center max-w-2xl mx-auto mb-16`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Leadership
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              Meet the{" "}
              <em className="text-[#B3002D] not-italic">Executive Team</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              Elected by youth, accountable to youth. Our leadership team brings together experience, passion, and an unwavering commitment to Garissa's future.
            </p>
          </div>

          <div className={`${fadeUp} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {leaders.map((l) => (
              <div key={l.name} className="leader-card bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-[rgba(179,0,45,0.25)] transition-all group">
                <div className={`leader-avatar w-16 h-16 rounded-2xl bg-gradient-to-br ${l.color} flex items-center justify-center text-white font-bold text-xl mb-6`}>
                  {l.initials}
                </div>
                <div className="text-[0.7rem] text-[#ff6b8a] font-bold tracking-widest uppercase mb-1">{l.role}</div>
                <h3 className="playfair text-xl text-white mb-3 group-hover:text-[#ff6b8a] transition-colors">{l.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ───────────────────────────────────────────── */}
      <section id="events" className="py-32 bg-[#0d1421] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(179,0,45,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center max-w-2xl mx-auto mb-16`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Upcoming Events
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              Mark Your{" "}
              <em className="text-[#B3002D] not-italic">Calendar</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              From summits and workshops to dialogues and sports days — GACOSYA keeps Garissa youth engaged, active, and connected all year round.
            </p>
          </div>

          <div className={`${fadeUp} flex flex-col gap-5`}>
            {events.map((ev) => (
              <div
                key={ev.title}
                className="group bg-white/[0.04] border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 hover:bg-white/[0.07] hover:border-[rgba(179,0,45,0.25)] transition-all"
              >
                {/* Date badge */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-[rgba(179,0,45,0.12)] border border-[rgba(179,0,45,0.25)] flex flex-col items-center justify-center">
                  <span className="playfair text-3xl text-white font-black leading-none">{ev.date.day}</span>
                  <span className="text-[0.65rem] text-[#ff6b8a] font-bold tracking-widest uppercase mt-0.5">{ev.date.month}</span>
                </div>
                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="playfair text-xl text-white group-hover:text-[#ff6b8a] transition-colors">{ev.title}</h3>
                    <span className={`text-[0.65rem] font-bold tracking-widest uppercase border px-3 py-1 rounded-full ${typeColors[ev.type]}`}>
                      {ev.type}
                    </span>
                  </div>
                  <div className="text-[#B3002D] text-xs font-semibold tracking-wide mb-2">📍 {ev.loc}</div>
                  <p className="text-white/50 text-sm leading-relaxed">{ev.desc}</p>
                </div>
                {/* CTA */}
                <div className="flex-shrink-0">
                  <a href="#cta" className="bg-white/5 border border-white/15 text-white text-sm font-semibold px-5 py-2.5 rounded-full no-underline hover:bg-[#B3002D] hover:border-[#B3002D] transition-all whitespace-nowrap">
                    Register →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(179,0,45,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center max-w-2xl mx-auto mb-16`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Voices from the Community
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              What Our Members{" "}
              <em className="text-[#B3002D] not-italic">Are Saying</em>
            </h2>
          </div>

          <div className={`${fadeUp} grid grid-cols-1 md:grid-cols-3 gap-6`}>
            {[
              {
                quote: "GACOSYA gave me access to mentors I never thought I would meet. Because of the scholarship programme, I am now pursuing my degree in Engineering. This organisation changed my life.",
                name: "Ismail Ahmed",
                role: "Engineering Student, Garissa University",
                initials: "IA",
                color: "from-[#B3002D] to-[#ff6b8a]",
              },
              {
                quote: "As a young woman from Ijara, I often felt invisible in county conversations. GACOSYA's Women's Caucus gave me a platform, a voice, and a network of sisters who uplift each other every day.",
                name: "Halima Noor",
                role: "Community Organiser, Ijara Sub-County",
                initials: "HN",
                color: "from-[#9d174d] to-[#ec4899]",
              },
              {
                quote: "The Innovation Bootcamp helped me validate my business idea and connect with investors. Today I run a small agri-tech startup employing 4 other youth from Lagdera. GACOSYA made this possible.",
                name: "Bashir Omar",
                role: "Founder, Lagdera AgriTech",
                initials: "BO",
                color: "from-[#065f46] to-[#10b981]",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:border-[rgba(179,0,45,0.25)] transition-all">
                <div className="text-[#B3002D] text-4xl playfair leading-none mb-4">"</div>
                <p className="text-white/65 text-sm leading-relaxed mb-8 italic">{t.quote}</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-32 bg-[#0d1421] relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-8">
          <div className={`${fadeUp} text-center mb-16`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              FAQ
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              Frequently Asked{" "}
              <em className="text-[#B3002D] not-italic">Questions</em>
            </h2>
            <p className="text-white/50 text-base">Everything you need to know about GACOSYA membership, governance, and activities.</p>
          </div>

          <div className={`${fadeUp} flex flex-col gap-4`}>
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-[rgba(179,0,45,0.25)] transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left bg-transparent border-none cursor-pointer"
                >
                  <span className="text-white font-semibold text-sm leading-relaxed pr-4">{faq.q}</span>
                  <span className={`text-[#B3002D] text-xl flex-shrink-0 transition-transform duration-300 ${activeFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`faq-answer ${activeFaq === i ? "open" : ""}`}>
                  <p className="text-white/55 text-sm leading-relaxed px-6 pb-6">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ───────────────────────────────────── */}
      <section id="cta" className="py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(179,0,45,0.14)_0%,transparent_70%)] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px)",
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto px-8 text-center">
          <div className={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-8">
              <span className="pulse-dot w-1.5 h-1.5 bg-[#B3002D] rounded-full" />
              Join the Movement
            </div>
            <h2 className="playfair text-4xl lg:text-6xl text-white leading-tight mb-6">
              Your Place in Garissa's{" "}
              <em className="text-[#B3002D] not-italic">Future Starts Here</em>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Whether you are a student, a professional, an entrepreneur, or simply a young person who cares about Garissa — GACOSYA has a home for you. Join thousands of youth already building the county we all deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="mailto:info@gacosya.or.ke" className="bg-[#B3002D] text-white px-10 py-4 rounded-full font-bold text-base no-underline hover:bg-[#8a0022] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(179,0,45,0.45)] transition-all">
                Become a Member
              </a>
              <a href="mailto:info@gacosya.or.ke" className="bg-transparent text-white px-10 py-4 rounded-full font-semibold text-base no-underline border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all">
                Partner With Us
              </a>
              <a href="mailto:info@gacosya.or.ke" className="bg-transparent text-white px-10 py-4 rounded-full font-semibold text-base no-underline border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all">
                Volunteer
              </a>
            </div>

            {/* Membership steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                { step: "01", title: "Express Interest", desc: "Fill in our short online form or visit your nearest sub-county chapter to register your interest." },
                { step: "02", title: "Attend an Orientation", desc: "Join one of our monthly orientation sessions to learn about GACOSYA's programs, governance, and opportunities." },
                { step: "03", title: "Become a Member", desc: "Complete your registration, receive your membership card, and start participating in programs that matter to you." },
              ].map((s) => (
                <div key={s.step} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-[rgba(179,0,45,0.25)] transition-all">
                  <div className="playfair text-4xl text-[rgba(179,0,45,0.35)] font-black mb-4">{s.step}</div>
                  <h4 className="text-white font-semibold mb-2">{s.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#0d1421]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} text-center mb-12`}>
            <p className="text-white/35 text-xs font-bold tracking-[0.15em] uppercase">Our Partners &amp; Supporters</p>
          </div>
          <div className={`${fadeUp} flex flex-wrap justify-center items-center gap-8`}>
            {[
              "Garissa County Government",
              "Garissa University",
              "UNICEF Kenya",
              "UN Youth Programme",
              "Kenya Red Cross",
              "UNHCR Kenya",
            ].map((p) => (
              <div
                key={p}
                className="bg-white/[0.04] border border-white/10 rounded-xl px-6 py-3 text-white/40 text-sm font-medium hover:text-white/70 hover:border-white/25 transition-all"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────── */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-[700px] mx-auto px-8 text-center">
          <div className={fadeUp}>
            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B3002D] to-transparent" />
              <div className="text-4xl mb-4">📬</div>
              <h3 className="playfair text-3xl text-white mb-3">Stay in the Loop</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Get the latest news, event updates, and opportunities from GACOSYA delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/[0.06] border border-white/15 rounded-full px-5 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-[rgba(179,0,45,0.5)] transition-colors"
                />
                <button className="bg-[#B3002D] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#8a0022] hover:shadow-[0_6px_20px_rgba(179,0,45,0.4)] transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-white/25 text-xs mt-4">No spam. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}