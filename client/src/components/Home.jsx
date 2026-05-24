import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ── Logo import ──────────────────────────────────────────────────────────────
// Place gacosya.jpeg inside src/assets/ then update the path below
import logo from "../assets/gacosya.jpeg";

// ── Scroll-reveal hook ───────────────────────────────────────────────────────
// FIX: Query by class ".reveal-el" instead of attribute selector "[data-reveal]"
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

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const step = Math.ceil(target / (duration / 16));
        let cur = 0;
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target);
          setCount(cur);
          if (cur >= target) clearInterval(timer);
        }, 16);
      }
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ════════════════════════════════════════════════════════════════════════════
export default function Home() {
  useReveal();

  // Navbar scroll effect
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Newsletter
  const [subDone, setSubDone] = useState(false);
  const [email, setEmail] = useState("");
  function handleSubscribe() {
    if (email.includes("@")) {
      setSubDone(true);
      setEmail("");
      setTimeout(() => setSubDone(false), 3000);
    }
  }

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Leadership", href: "#leadership" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#footer" },
  ];

  const values = [
    { icon: "🤝", title: "Unity", desc: "Togetherness across ethnic, religious, and social lines — one Garissa, one voice." },
    { icon: "🔭", title: "Vision", desc: "Forward-thinking solutions and long-term development for sustainable community growth." },
    { icon: "📈", title: "Progress", desc: "Committed to continuous growth, learning, and measurable community impact." },
    { icon: "⚖️", title: "Integrity", desc: "Upholding honesty, fairness, and transparency in all operations and decisions." },
    { icon: "🦁", title: "Leadership", desc: "Promoting ethical, responsible, and youth-centered leadership at every level." },
  ];

  const programs = [
    { icon: "🎓", title: "Education & Mentorship", desc: "University forums, career talks, alumni mentorship, internship support, and campus leadership training to shape tomorrow's professionals." },
    { icon: "💡", title: "Youth Empowerment", desc: "Skills in ICT, digital marketing, and entrepreneurship. Financial literacy, savings groups, and business incubation hubs." },
    { icon: "🕊️", title: "Peacebuilding & Social Cohesion", desc: "Dialogue forums, interfaith sessions, CVE campaigns, and the school peace ambassadors program fostering unity." },
    { icon: "🏛️", title: "Governance & Civic Engagement", desc: "Youth representation in public forums, civic education on devolution, and policy dialogues with local leaders and MCAs." },
    { icon: "🌱", title: "Environmental Stewardship", desc: "Tree planting drives, climate education, school eco-clubs, and the Garissa Green Spaces Project for a sustainable future." },
    { icon: "❤️", title: "Public Health & Awareness", desc: "Mental health forums, substance abuse prevention, youth-friendly reproductive health sessions, and blood donation campaigns." },
    { icon: "🎭", title: "Culture, Talent & Sports", desc: "The annual Garissa Youth Festival, inter-chapter football and poetry tournaments, and talent search and showcase programs." },
  ];

  const impactStats = [
    { num: 1000, suffix: "+", label: "Youth Members & Beneficiaries Reached" },
    { num: 7, suffix: "+", label: "Active Community Programs Running" },
    { num: 6, suffix: "", label: "Operational Sub-County Chapters" },
    { num: 5, suffix: "+", label: "Forums & Youth Engagement Events" },
    { num: 10, suffix: "+", label: "Partner Institutions & Organizations" },
  ];

  const whyJoin = [
    { icon: "🧭", title: "Mentorship Opportunities", desc: "Get paired with experienced alumni and professionals for career guidance, job-shadowing, and personal development." },
    { icon: "🏆", title: "Leadership Exposure", desc: "Take on leadership roles within chapters, committees, and national structures gaining real-world governance experience." },
    { icon: "🔗", title: "Powerful Networking", desc: "Connect with students, professionals, and youth leaders across all 6 sub-counties, universities, and partner organizations." },
    { icon: "🚀", title: "Career Growth", desc: "Access conferences, certificates, letters of recommendation, and capacity-building workshops that accelerate your career." },
    { icon: "🎓", title: "Scholarships Advocacy", desc: "Benefit from active scholarship advocacy and be first to receive information about grants and educational funding." },
    { icon: "🛠️", title: "Skills Development", desc: "Participate in hands-on training in ICT, digital marketing, public speaking, entrepreneurship, and life skills." },
  ];

  const initiatives = [
    { tag: "🎓 Mentorship", title: "Campus Connect Mentorship Program", desc: "A structured alumni-to-student mentorship initiative connecting Garissa youth in universities with experienced professionals, providing career guidance, motivation, and real-world insights to shape academic and professional journeys." },
    { tag: "🗣️ Youth Forum", title: "Garissa Youth Forum on CVE & Mental Health", desc: "A flagship dialogue forum addressing countering violent extremism, radicalization prevention, and mental health awareness among Garissa youth — creating safe spaces for open conversation and building psychological resilience." },
    { tag: "🌍 Environment", title: "Climate Action Events & School Outreach", desc: "Community-wide climate awareness campaigns, school eco-clubs, and the Garissa Green Spaces Project — inspiring a new generation of environmental stewards to tackle climate challenges in Northern Kenya." },
    { tag: "🕊️ Peacebuilding", title: "Interfaith Peacebuilding Campaigns", desc: "Multi-faith dialogue sessions, village peace ambassador programs, and school-based workshops that bring together youth across religious, ethnic, and social lines to build lasting social cohesion across Garissa County." },
    { tag: "🏛️ Leadership", title: "First Leadership Training & Strategic Retreat", desc: "An immersive leadership training and strategic planning retreat for GACOSYA's inaugural executive committee — establishing governance systems, chapter frameworks, and a bold roadmap for youth empowerment." },
  ];

  const leaders = [
    { initials: "CH", emoji: "👑", role: "Chairperson", title: "National Executive Committee" },
    { initials: "SG", emoji: "📋", role: "Secretary General", title: "National Executive Committee" },
    { initials: "OS", emoji: "⚙️", role: "Organizing Secretary", title: "National Executive Committee" },
    { initials: "PR", emoji: "📢", role: "PR & Communications", title: "National Executive Committee" },
  ];

  const events = [
    { day: "15", month: "June 2025", type: "🎓 Workshop", title: "Career Guidance & Mentorship Day", desc: "Alumni professionals connect with current students for career talks, CV workshops, and internship guidance across university chapters." },
    { day: "28", month: "June 2025", type: "🕊️ Forum", title: "Garissa Youth Forum on Peacebuilding", desc: "A county-wide youth dialogue on social cohesion, radicalization prevention, and building resilient communities in Northern Kenya." },
    { day: "12", month: "July 2025", type: "⚽ Sports & Talent", title: "Inter-Chapter Sports & Talent Festival", desc: "Youth from all 6 sub-county chapters compete in football, poetry, public speaking, and cultural performances." },
  ];

  const testimonials = [
    { initials: "FA", name: "Faisal A.", role: "University Student, Garissa Township Chapter", quote: "GACOSYA gave me a platform I never had before. Through the mentorship program, I connected with an alumnus who helped me secure my first internship. This organization is genuinely changing lives in Garissa." },
    { initials: "ZH", name: "Zainab H.", role: "Youth Leader, Dadaab Chapter", quote: "The peacebuilding forums organized by GACOSYA brought together youth from different backgrounds in a way I had never seen before. The conversations we had were transformative and gave me hope for Garissa's future." },
    { initials: "AM", name: "Abdullahi M.", role: "Chapter Representative, Lagdera", quote: "Being part of GACOSYA's leadership team opened my eyes to what youth-led change looks like. I've grown immensely — as a communicator, a leader, and as a citizen committed to Garissa's development." },
    { initials: "HI", name: "Halima I.", role: "Young Entrepreneur, Fafi Chapter", quote: "The skills training I received through GACOSYA's entrepreneurship workshops equipped me with tools I'm using to start my own small business. The support network here is truly something special." },
  ];

  const partners = [
    { icon: "🏛️", name: "County Government of Garissa", desc: "Supporting youth participation in devolution and public policy" },
    { icon: "🎓", name: "Universities & Colleges", desc: "Campus chapters, career forums, and academic mentorship programs" },
    { icon: "🌐", name: "NGOs & Civil Society", desc: "Collaborating on peace, health, and community development initiatives" },
    { icon: "🕊️", name: "Peace & Interfaith Organizations", desc: "Building social cohesion through dialogue and community programs" },
    { icon: "💻", name: "Media Houses & Tech Hubs", desc: "Amplifying youth voices and building digital skills for the future" },
    { icon: "🌍", name: "International Development Partners", desc: "Connecting Garissa youth with global opportunities and funding" },
  ];

  // ── FIX: Use "reveal-el" as a real CSS class, queryable by .reveal-el ──────
  const fadeUp   = "reveal-el opacity-0 translate-y-8 transition-all duration-700 ease-out";
  const fadeLeft = "reveal-el opacity-0 -translate-x-8 transition-all duration-700 ease-out";
  const fadeRight= "reveal-el opacity-0 translate-x-8 transition-all duration-700 ease-out";

  return (
    <div className="font-['Outfit',sans-serif] text-[#111827] overflow-x-hidden">
      {/* ── Google Fonts ───────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }
        .swiper-pagination-bullet { background: rgba(255,255,255,0.4) !important; }
        .swiper-pagination-bullet-active { background: #B3002D !important; }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-slow-rev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
        @keyframes scroll-line { 0%{height:10px;opacity:0} 50%{height:40px;opacity:1} 100%{height:10px;opacity:0} }
        .spin-slow { animation: spin-slow 20s linear infinite; }
        .spin-slow-rev { animation: spin-slow-rev 20s linear infinite; }
        .float1 { animation: float1 4s ease-in-out infinite; }
        .float2 { animation: float2 5s ease-in-out infinite; }
        .pulse-dot { animation: pulse-dot 2s infinite; }
        .scroll-line { animation: scroll-line 2s ease-in-out infinite; }
        .nav-link::after { content:''; position:absolute; bottom:-4px; left:0; right:0; height:2px; background:#B3002D; transform:scaleX(0); transition:transform 0.2s; }
        .nav-link:hover::after { transform:scaleX(1); }
        .prog-card-bar { transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
        .prog-card:hover .prog-card-bar { transform: scaleX(1); }
        .value-card-overlay { opacity: 0; transition: opacity 0.3s; }
        .value-card:hover .value-card-overlay { opacity: 1; }
      `}</style>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* MOBILE MENU                                                         */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#111827] z-[999] flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-8 text-white text-4xl leading-none bg-transparent border-none cursor-pointer"
          >
            ✕
          </button>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="playfair text-white text-3xl no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* NAVBAR                                                              */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(17,24,39,0.97)] backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.3)] py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 no-underline">
            <img
              src={logo}
              alt="GACOSYA Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col leading-none">
              <span className="playfair text-lg text-white font-bold tracking-wide">GACOSYA</span>
              <span className="text-[0.62rem] text-white/60 tracking-widest uppercase mt-0.5">Garissa County</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="nav-link relative text-white/85 no-underline text-sm font-medium tracking-wide hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="hidden lg:inline-block bg-[#B3002D] text-white px-5 py-2 rounded-full font-semibold text-sm tracking-wide no-underline hover:bg-[#8a0022] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(179,0,45,0.4)] transition-all"
            >
              Join Community
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-white rounded" />
              <span className="block w-6 h-0.5 bg-white rounded" />
              <span className="block w-6 h-0.5 bg-white rounded" />
            </button>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* HERO                                                                */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="min-h-screen relative flex items-center bg-[#111827] overflow-hidden"
      >
        {/* Background */}
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
            {/* Badge */}
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
              Building a united, educated, innovative, and empowered youth
              community across Garissa County and beyond — through collaboration,
              mentorship, and collective action.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#cta"
                className="bg-[#B3002D] text-white px-8 py-3.5 rounded-full font-bold text-base no-underline hover:bg-[#8a0022] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(179,0,45,0.45)] transition-all"
              >
                Join Us Today
              </a>
              <a
                href="#programs"
                className="bg-transparent text-white px-8 py-3.5 rounded-full font-semibold text-base no-underline border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
              >
                Explore Programs
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { num: "6", label: "Sub-County Chapters" },
                { num: "1K+", label: "Youth Reached" },
                { num: "2024", label: "Established" },
                { num: "7+", label: "Active Programs" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm"
                >
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
                  <img
                    src={logo}
                    alt="GACOSYA Logo"
                    className="w-[220px] h-[220px] object-contain rounded-full"
                  />
                </div>
              </div>
              {/* Float cards */}
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

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* ABOUT                                                               */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image side */}
          <div className={`${fadeLeft} relative`}>
            <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-[rgba(179,0,45,0.1)] to-[rgba(179,0,45,0.02)] border-2 border-[rgba(179,0,45,0.15)] flex items-center justify-center relative overflow-hidden">
              <img src={logo} alt="" aria-hidden className="absolute w-[70%] opacity-[0.12]" />
              <img src={logo} alt="GACOSYA Organization Logo" className="relative z-10 w-[55%]" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#B3002D] text-white rounded-2xl p-5 text-center shadow-[0_16px_40px_rgba(179,0,45,0.35)]">
              <strong className="block playfair text-4xl">2024</strong>
              <span className="text-xs opacity-85">Founded</span>
            </div>
          </div>

          {/* Text side */}
          <div className={fadeRight}>
            <span className="inline-block text-[#B3002D] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              Who We Are
            </span>
            <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-5">
              A Youth-Led Movement for Garissa's Future
            </h2>
            <p className="text-[#6B7280] text-base leading-[1.8] mb-8">
              The Garissa County Students and Youths Association (GACOSYA) is an
              apolitical, non-profit organization uniting students, graduates,
              young professionals, and youth leaders from across Garissa County.
              Governed by democratic principles and a ratified constitution, we
              are building a generation ready to transform their communities.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "🌟 Our Vision", text: "To make Garissa shine in producing competent and reliable youths." },
                { label: "🎯 Our Mission", text: "To build and strengthen peaceful interactions through empowerment, training, advocacy, and collaborations." },
              ].map((mv) => (
                <div
                  key={mv.label}
                  className="bg-white rounded-2xl p-5 border-l-4 border-[#B3002D] shadow-sm"
                >
                  <h4 className="text-[0.72rem] text-[#B3002D] font-bold uppercase tracking-[0.1em] mb-2">
                    {mv.label}
                  </h4>
                  <p className="text-[0.88rem] text-[#1f2937] leading-[1.6]">{mv.text}</p>
                </div>
              ))}
            </div>

            <a
              href="#programs"
              className="inline-block bg-[#B3002D] text-white px-8 py-3.5 rounded-full font-bold no-underline hover:bg-[#8a0022] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(179,0,45,0.45)] transition-all"
            >
              Discover Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* CORE VALUES                                                         */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="values" className="py-24 px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className={`${fadeUp} text-center mb-14`}>
            <span className="inline-block text-[#B3002D] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              What We Stand For
            </span>
            <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-4">Our Core Values</h2>
            <p className="text-[#6B7280] text-lg leading-[1.75] max-w-xl mx-auto">
              These five principles guide every decision, every program, and every interaction within GACOSYA.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`${fadeUp} value-card relative bg-[#F8FAFC] rounded-[20px] p-8 text-center border border-[#E5E7EB] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[rgba(179,0,45,0.2)] transition-all duration-300 overflow-hidden cursor-default`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="value-card-overlay absolute inset-0 bg-gradient-to-br from-[rgba(179,0,45,0.05)] to-transparent" />
                <div className="w-[60px] h-[60px] bg-[rgba(179,0,45,0.08)] rounded-2xl flex items-center justify-center mx-auto mb-5 text-[1.6rem]">
                  {v.icon}
                </div>
                <h3 className="font-bold text-[1.05rem] mb-2">{v.title}</h3>
                <p className="text-[#6B7280] text-[0.85rem] leading-[1.65]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* PROGRAMS                                                            */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="programs" className="py-24 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto">
          <div className={`${fadeUp} mb-12`}>
            <span className="inline-block text-[#B3002D] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              What We Do
            </span>
            <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-4">Our Programs &amp; Initiatives</h2>
            <p className="text-[#6B7280] text-lg leading-[1.75] max-w-lg">
              Comprehensive programs designed to transform Garissa's youth through education, empowerment, and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <div
                key={p.title}
                className={`${fadeUp} prog-card relative bg-white rounded-[20px] p-8 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="prog-card-bar absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B3002D] to-[#8a0022]" />
                <div className="text-[2.2rem] mb-4">{p.icon}</div>
                <h3 className="font-bold text-[1.05rem] mb-2">{p.title}</h3>
                <p className="text-[#6B7280] text-[0.88rem] leading-[1.7] mb-5">{p.desc}</p>
                <a href="#" className="text-[#B3002D] text-[0.85rem] font-semibold no-underline inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* IMPACT STATS                                                        */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="impact" className="py-24 px-8 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(179,0,45,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className={`${fadeUp} text-center mb-14`}>
            <span className="inline-block text-[#ff6b8a] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              Our Impact
            </span>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">Measuring Our Reach</h2>
            <p className="text-white/60 text-lg leading-[1.75] max-w-xl mx-auto">
              Since August 2024, GACOSYA has been building momentum — and these numbers are just the beginning.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {impactStats.map((s, i) => (
              <div key={s.label} className={fadeUp} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="playfair text-5xl text-white font-black leading-none mb-2">
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <div className="w-10 h-0.5 bg-[rgba(179,0,45,0.4)] mx-auto my-3" />
                <div className="text-[0.85rem] text-white/55 leading-[1.5]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* WHY JOIN                                                            */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="why" className="py-24 px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className={`${fadeUp} text-center mb-12`}>
            <span className="inline-block text-[#B3002D] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              Join the Movement
            </span>
            <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-4">Why Become a GACOSYA Member?</h2>
            <p className="text-[#6B7280] text-lg leading-[1.75] max-w-xl mx-auto">
              Being part of GACOSYA opens doors to opportunity, growth, and lasting community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoin.map((w, i) => (
              <div
                key={w.title}
                className={`${fadeUp} bg-[#F8FAFC] rounded-[20px] p-8 border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-300`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="text-[2rem] mb-4">{w.icon}</div>
                <h3 className="font-bold text-base mb-2">{w.title}</h3>
                <p className="text-[#6B7280] text-[0.88rem] leading-[1.7]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* FEATURED INITIATIVES SLIDER                                         */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="initiatives" className="py-24 px-8 bg-[#111827]">
        <div className="max-w-[1280px] mx-auto">
          <div className={`${fadeUp} text-center mb-10`}>
            <span className="inline-block text-[#ff6b8a] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              Featured Initiatives
            </span>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">Making Real Impact</h2>
            <p className="text-white/60 text-lg leading-[1.75] max-w-xl mx-auto">
              From campus mentorship to climate action — our flagship programs driving change across Garissa.
            </p>
          </div>

          <div className={fadeUp}>
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1.2}
              spaceBetween={24}
              loop
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 768: { slidesPerView: 1.6 }, 1024: { slidesPerView: 2 } }}
              className="pb-12"
            >
              {initiatives.map((init) => (
                <SwiperSlide key={init.title}>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-10 h-full">
                    <span className="inline-block bg-[rgba(179,0,45,0.2)] text-[#ff6b8a] text-xs font-bold uppercase tracking-[0.08em] px-3 py-1.5 rounded-full mb-4">
                      {init.tag}
                    </span>
                    <h3 className="playfair text-2xl text-white mb-3">{init.title}</h3>
                    <p className="text-white/60 text-[0.95rem] leading-[1.75]">{init.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* LEADERSHIP                                                          */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="leadership" className="py-24 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto">
          <div className={`${fadeUp} text-center mb-12`}>
            <span className="inline-block text-[#B3002D] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              Our Team
            </span>
            <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-4">National Executive Committee</h2>
            <p className="text-[#6B7280] text-lg leading-[1.75] max-w-xl mx-auto">
              Led by passionate, dedicated youth committed to transforming Garissa County through ethical and visionary leadership.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((l, i) => (
              <div
                key={l.role}
                className={`${fadeUp} bg-white rounded-[20px] overflow-hidden border border-[#E5E7EB] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 text-center`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-full aspect-square bg-gradient-to-br from-[rgba(179,0,45,0.12)] to-[rgba(17,24,39,0.08)] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute text-[6rem] opacity-[0.05]">{l.emoji}</span>
                  <span className="playfair text-5xl text-[#B3002D] opacity-70 relative z-10">{l.initials}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-1">{l.role}</h3>
                  <p className="text-[#B3002D] text-xs font-semibold mb-3">{l.title}</p>
                  <div className="flex justify-center gap-2">
                    {["𝕏", "in", "📷"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="w-8 h-8 bg-[#F8FAFC] rounded-full flex items-center justify-center text-xs text-[#6B7280] no-underline hover:bg-[#B3002D] hover:text-white transition-all"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* EVENTS                                                              */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="events" className="py-24 px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className={`${fadeUp} mb-12`}>
            <span className="inline-block text-[#B3002D] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              What's Happening
            </span>
            <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-4">Upcoming Events &amp; Forums</h2>
            <p className="text-[#6B7280] text-lg leading-[1.75] max-w-lg">
              Join us at our upcoming programs, workshops, and community engagement events across Garissa County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <div
                key={ev.title}
                className={`${fadeUp} bg-[#F8FAFC] rounded-[20px] overflow-hidden border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] transition-all duration-300`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="bg-[#B3002D] text-white p-4 text-center">
                  <span className="playfair text-[2.5rem] leading-none block">{ev.day}</span>
                  <span className="text-[0.78rem] tracking-[0.1em] uppercase opacity-85">{ev.month}</span>
                </div>
                <div className="p-6">
                  <div className="text-[0.72rem] text-[#B3002D] font-bold uppercase tracking-[0.1em] mb-2">{ev.type}</div>
                  <h3 className="font-bold text-base mb-2">{ev.title}</h3>
                  <p className="text-[#6B7280] text-[0.85rem] leading-[1.6]">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* TESTIMONIALS                                                        */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="testimonials" className="py-24 px-8 bg-[#111827]">
        <div className="max-w-[1280px] mx-auto">
          <div className={`${fadeUp} text-center mb-10`}>
            <span className="inline-block text-[#ff6b8a] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              Voices from Our Community
            </span>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight">What Our Members Say</h2>
          </div>

          <div className={fadeUp}>
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1.2}
              spaceBetween={24}
              loop
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 768: { slidesPerView: 1.5 }, 1024: { slidesPerView: 2 } }}
              className="pb-12"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.name}>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-10 h-full">
                    <div className="text-[#FBBF24] tracking-[2px] mb-4 text-lg">★★★★★</div>
                    <p className="text-white/85 text-[1.05rem] leading-[1.8] mb-6 italic">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[rgba(179,0,45,0.2)] border-2 border-[rgba(179,0,45,0.4)] flex items-center justify-center playfair text-lg text-[#ff6b8a]">
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-white font-bold">{t.name}</p>
                        <p className="text-white/50 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* PARTNERS                                                            */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="partners" className="py-24 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto">
          <div className={`${fadeUp} text-center mb-12`}>
            <span className="inline-block text-[#B3002D] text-xs font-bold tracking-[0.12em] uppercase mb-3">
              Collaborations
            </span>
            <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-4">Partners &amp; Collaborators</h2>
            <p className="text-[#6B7280] text-lg leading-[1.75] max-w-xl mx-auto">
              We work alongside county government, academic institutions, NGOs, and international partners to amplify youth impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <div
                key={p.name}
                className={`${fadeUp} bg-white rounded-2xl p-8 border border-[#E5E7EB] flex flex-col items-center gap-3 text-center hover:border-[rgba(179,0,45,0.25)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="text-[2.5rem]">{p.icon}</div>
                <h4 className="font-bold text-[0.95rem]">{p.name}</h4>
                <p className="text-[#6B7280] text-[0.82rem]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* CTA                                                                 */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <section id="cta" className="py-24 px-8 bg-[#B3002D] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,rgba(255,255,255,0.5) 0,rgba(255,255,255,0.5) 1px,transparent 0,transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className={`${fadeUp} relative z-10 max-w-[1280px] mx-auto`}>
          <span className="inline-block text-white/70 text-xs font-bold tracking-[0.12em] uppercase mb-4">
            Be Part of the Change
          </span>
          <h2 className="playfair text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Join the Movement Shaping the Future of Garissa
          </h2>
          <p className="text-white/88 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're a student, young professional, or community champion — GACOSYA is your platform to lead, grow, and transform Garissa County.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:infogacosya007@gmail.com"
              className="bg-white text-[#B3002D] px-9 py-3.5 rounded-full font-bold text-base no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.2)] transition-all"
            >
              Become a Member
            </a>
            <a
              href="mailto:infogacosya007@gmail.com"
              className="bg-transparent text-white px-9 py-3.5 rounded-full font-semibold text-base no-underline border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════ */}
      {/* FOOTER                                                              */}
      {/* ════════════════════════════════════════════════════════════════════ */}
      <footer id="footer" className="bg-[#0a0f18] text-white/75 pt-20 pb-8 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-16 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="GACOSYA Logo" className="w-11 h-11 rounded-full" />
                <span className="playfair text-base text-white">GACOSYA</span>
              </div>
              <p className="text-[0.9rem] leading-[1.8] text-white/70 mb-5">
                Garissa County Students and Youths Association — a youth-led non-profit empowering the next generation of leaders through education, mentorship, and community transformation.
              </p>
              <div className="flex gap-2">
                {["𝕏", "📷", "f", "in", "▶"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/60 no-underline text-sm hover:bg-[#B3002D] hover:text-white transition-all"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white text-[0.88rem] font-bold uppercase tracking-[0.1em] mb-5">Quick Links</h4>
              <ul className="list-none flex flex-col gap-2.5 p-0">
                {["Home", "About GACOSYA", "Our Programs", "Leadership", "Events", "Impact"].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/60 no-underline text-[0.9rem] hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-white text-[0.88rem] font-bold uppercase tracking-[0.1em] mb-5">Programs</h4>
              <ul className="list-none flex flex-col gap-2.5 p-0">
                {["Education & Mentorship", "Youth Empowerment", "Peacebuilding", "Civic Engagement", "Environmental Stewardship", "Culture & Sports"].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/60 no-underline text-[0.9rem] hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div>
              <h4 className="text-white text-[0.88rem] font-bold uppercase tracking-[0.1em] mb-5">Contact Us</h4>
              {[
                { icon: "📍", text: "Garissa Township, Garissa County, Kenya" },
                { icon: "📧", text: "infogacosya007@gmail.com", href: "mailto:infogacosya007@gmail.com" },
                { icon: "📞", text: "0111 758 657", href: "tel:+254111758657" },
              ].map((c) => (
                <div key={c.text} className="flex gap-3 mb-3.5 text-[0.88rem]">
                  <span className="text-[#B3002D] flex-shrink-0">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className="text-white/60 no-underline hover:text-white transition-colors">{c.text}</a>
                  ) : (
                    <span className="text-white/60">{c.text}</span>
                  )}
                </div>
              ))}

              <h4 className="text-white text-[0.88rem] font-bold uppercase tracking-[0.1em] mt-6 mb-2">Newsletter</h4>
              <p className="text-white/50 text-[0.82rem] mb-3">Get updates on programs and events.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/15 rounded-full text-white text-[0.88rem] outline-none placeholder:text-white/35"
                />
                <button
                  onClick={handleSubscribe}
                  className={`px-4 py-2.5 rounded-full text-[0.85rem] font-semibold text-white border-none cursor-pointer whitespace-nowrap transition-colors ${
                    subDone ? "bg-emerald-600" : "bg-[#B3002D] hover:bg-[#8a0022]"
                  }`}
                >
                  {subDone ? "✓ Done!" : "Subscribe"}
                </button>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-2 text-[0.82rem] text-white/50">
            <span>© 2025 GACOSYA — Garissa County Students and Youths Association. All rights reserved.</span>
            <span>"Empowering Youth. Building Garissa."</span>
          </div>
        </div>
      </footer>
    </div>
  );
}