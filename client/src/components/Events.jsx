import { useEffect, useState } from "react";
import logo from "../assets/gacosya.jpeg";

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

/* ─── Data ─── */
const CATEGORIES = ["All", "Summit", "Workshop", "Sports", "Dialogue", "Cultural", "Networking"];

const ALL_EVENTS = [
  {
    id: 1,
    date: { day: "14", month: "JUL", year: "2025" },
    title: "Annual Youth Summit 2025",
    loc: "Garissa University Grounds",
    type: "Summit",
    status: "upcoming",
    featured: true,
    time: "8:00 AM – 6:00 PM",
    capacity: "500 delegates",
    desc: "Our flagship gathering bringing together youth, county officials, and development partners for a full day of dialogue, panel discussions, and collective action planning for Garissa's future.",
    highlights: ["Keynote addresses", "Breakout sessions", "Networking lunch", "Awards ceremony"],
  },
  {
    id: 2,
    date: { day: "02", month: "AUG", year: "2025" },
    title: "Innovation & Entrepreneurship Bootcamp",
    loc: "GACOSYA Innovation Hub, Garissa Town",
    type: "Workshop",
    status: "upcoming",
    featured: false,
    time: "9:00 AM – 5:00 PM (3 Days)",
    capacity: "80 participants",
    desc: "A 3-day intensive entrepreneurship and technology workshop for youth aged 18–35. From ideation to pitching — participants leave with validated business concepts and a network of like-minded founders.",
    highlights: ["Business model canvas", "Investor pitch clinic", "Tech tools masterclass", "Mentorship circles"],
  },
  {
    id: 3,
    date: { day: "20", month: "AUG", year: "2025" },
    title: "Inter-Sub-County Sports Day",
    loc: "Garissa Municipal Stadium",
    type: "Sports",
    status: "upcoming",
    featured: false,
    time: "7:00 AM – 6:00 PM",
    capacity: "Open to all",
    desc: "A competitive and celebratory sporting event fostering unity and healthy competition among youth representatives from all six sub-counties, featuring football, athletics, and volleyball tournaments.",
    highlights: ["Football tournament", "Athletics races", "Volleyball finals", "Prize giving"],
  },
  {
    id: 4,
    date: { day: "12", month: "SEP", year: "2025" },
    title: "Mental Health & Wellness Dialogue",
    loc: "County Hall Conference Room",
    type: "Dialogue",
    status: "upcoming",
    featured: false,
    time: "10:00 AM – 4:00 PM",
    capacity: "200 participants",
    desc: "An open forum on youth mental health, substance abuse awareness, and peer-to-peer support systems, featuring clinical psychologists, community counsellors, and youth advocates.",
    highlights: ["Panel discussion", "Counselling booths", "Peer support training", "Resource fair"],
  },
  {
    id: 5,
    date: { day: "28", month: "SEP", year: "2025" },
    title: "Garissa Cultural Arts Festival",
    loc: "Garissa Town Park",
    type: "Cultural",
    status: "upcoming",
    featured: true,
    time: "2:00 PM – 10:00 PM",
    capacity: "Open to public",
    desc: "A vibrant celebration of Garissa's rich cultural heritage through poetry, spoken word, traditional music, visual arts, and storytelling — honouring our roots while imagining a bold future.",
    highlights: ["Poetry slam", "Live music performances", "Visual arts exhibition", "Cultural food fair"],
  },
  {
    id: 6,
    date: { day: "10", month: "OCT", year: "2025" },
    title: "Professional Networking Night",
    loc: "Nomads Rooftop, Garissa Town",
    type: "Networking",
    status: "upcoming",
    featured: false,
    time: "6:00 PM – 10:00 PM",
    capacity: "150 professionals",
    desc: "An exclusive evening connecting Garissa's young professionals, university graduates, and emerging entrepreneurs with established leaders from the public and private sector.",
    highlights: ["Speed networking", "Guest speaker", "Career fair tables", "Cocktail reception"],
  },
  {
    id: 7,
    date: { day: "22", month: "MAR", year: "2025" },
    title: "Youth Governance Forum",
    loc: "Garissa County Assembly Hall",
    type: "Dialogue",
    status: "past",
    featured: false,
    time: "9:00 AM – 4:00 PM",
    capacity: "300 participants",
    desc: "A landmark forum on youth participation in county governance, budget processes, and policy formulation — attended by senior county officials and over 300 youth delegates.",
    highlights: ["County executive engagement", "Budget literacy session", "Youth manifesto launch", "Press briefing"],
  },
  {
    id: 8,
    date: { day: "15", month: "FEB", year: "2025" },
    title: "Scholarship & Bursary Fair 2025",
    loc: "Garissa University, Main Auditorium",
    type: "Workshop",
    status: "past",
    featured: false,
    time: "8:00 AM – 5:00 PM",
    capacity: "400 students",
    desc: "Over 400 students connected with county bursary officers, university representatives, and NGO scholarship programs. Applications assisted on-site by GACOSYA volunteers.",
    highlights: ["25+ scholarship booths", "Application assistance", "University representatives", "Financial aid clinic"],
  },
];

const typeColors = {
  Summit:    { bg: "bg-[rgba(179,0,45,0.15)]",   text: "text-[#ff6b8a]",   border: "border-[rgba(179,0,45,0.3)]" },
  Workshop:  { bg: "bg-[rgba(30,64,175,0.2)]",   text: "text-[#93c5fd]",   border: "border-[rgba(30,64,175,0.3)]" },
  Sports:    { bg: "bg-[rgba(6,95,70,0.2)]",     text: "text-[#6ee7b7]",   border: "border-[rgba(6,95,70,0.3)]" },
  Dialogue:  { bg: "bg-[rgba(124,58,237,0.2)]",  text: "text-[#c4b5fd]",   border: "border-[rgba(124,58,237,0.3)]" },
  Cultural:  { bg: "bg-[rgba(180,83,9,0.2)]",    text: "text-[#fbbf24]",   border: "border-[rgba(180,83,9,0.3)]" },
  Networking:{ bg: "bg-[rgba(6,78,59,0.2)]",     text: "text-[#34d399]",   border: "border-[rgba(6,78,59,0.3)]" },
};

/* ─── Featured Event Card ─── */
function FeaturedCard({ ev }) {
  const tc = typeColors[ev.type];
  return (
    <div className="relative rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-[rgba(179,0,45,0.35)] transition-all group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B3002D] via-[#ff6b8a] to-transparent" />
      <div className="p-8 lg:p-10">
        <div className="flex flex-wrap gap-3 items-center mb-6">
          <span className={`text-[0.65rem] font-bold tracking-widest uppercase border px-3 py-1 rounded-full ${tc.bg} ${tc.text} ${tc.border}`}>
            {ev.type}
          </span>
          <span className="text-[0.65rem] font-bold tracking-widest uppercase border px-3 py-1 rounded-full bg-[rgba(201,168,76,0.15)] text-[#C9A84C] border-[rgba(201,168,76,0.3)]">
            ⭐ Featured
          </span>
          {ev.status === "upcoming" && (
            <span className="flex items-center gap-1.5 text-[0.65rem] font-bold tracking-widest uppercase text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Upcoming
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Date block */}
          <div className="lg:col-span-1">
            <div className="w-28 h-28 rounded-3xl bg-[rgba(179,0,45,0.12)] border border-[rgba(179,0,45,0.25)] flex flex-col items-center justify-center mb-6">
              <span className="font-['Playfair_Display',serif] text-5xl text-white font-black leading-none">{ev.date.day}</span>
              <span className="text-[0.65rem] text-[#ff6b8a] font-bold tracking-widest uppercase mt-1">{ev.date.month} {ev.date.year}</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="text-[#B3002D] text-sm mt-0.5">📍</span>
                <span className="text-white/60 text-sm leading-relaxed">{ev.loc}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#B3002D] text-sm mt-0.5">🕐</span>
                <span className="text-white/60 text-sm">{ev.time}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[#B3002D] text-sm mt-0.5">👥</span>
                <span className="text-white/60 text-sm">{ev.capacity}</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <h3 className="font-['Playfair_Display',serif] text-3xl text-white mb-4 group-hover:text-[#ff6b8a] transition-colors leading-tight">
              {ev.title}
            </h3>
            <p className="text-white/60 text-base leading-[1.8] mb-6">{ev.desc}</p>
            <div className="mb-8">
              <p className="text-white/40 text-[0.7rem] font-bold tracking-widest uppercase mb-3">Event Highlights</p>
              <div className="flex flex-wrap gap-2">
                {ev.highlights.map((h) => (
                  <span key={h} className="flex items-center gap-1.5 text-xs bg-white/[0.06] border border-white/10 text-white/70 px-3 py-1.5 rounded-full">
                    <span className="text-[#B3002D]">✦</span> {h}
                  </span>
                ))}
              </div>
            </div>
            <a href="mailto:info@gacosya.or.ke" className="inline-flex items-center gap-2 bg-[#B3002D] text-white px-8 py-3 rounded-full font-bold text-sm no-underline hover:bg-[#8a0022] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(179,0,45,0.45)] transition-all">
              Register Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Standard Event Card ─── */
function EventCard({ ev }) {
  const tc = typeColors[ev.type];
  const isPast = ev.status === "past";
  return (
    <div className={`group bg-white/[0.04] border border-white/10 rounded-3xl p-6 flex flex-col gap-5 hover:bg-white/[0.07] hover:border-[rgba(179,0,45,0.25)] transition-all ${isPast ? "opacity-60" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        {/* Date */}
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[rgba(179,0,45,0.12)] border border-[rgba(179,0,45,0.25)] flex flex-col items-center justify-center">
          <span className="font-['Playfair_Display',serif] text-2xl text-white font-black leading-none">{ev.date.day}</span>
          <span className="text-[0.6rem] text-[#ff6b8a] font-bold tracking-widest uppercase">{ev.date.month}</span>
        </div>
        {/* Badge */}
        <span className={`text-[0.6rem] font-bold tracking-widest uppercase border px-2.5 py-1 rounded-full ${tc.bg} ${tc.text} ${tc.border}`}>
          {ev.type}
        </span>
      </div>
      <div>
        <h3 className="font-['Playfair_Display',serif] text-lg text-white mb-2 group-hover:text-[#ff6b8a] transition-colors leading-snug">{ev.title}</h3>
        <div className="text-[#B3002D] text-xs font-semibold tracking-wide mb-2">📍 {ev.loc}</div>
        <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{ev.desc}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="flex items-center gap-1 text-[0.65rem] text-white/40">🕐 {ev.time}</span>
        <span className="text-white/20">·</span>
        <span className="flex items-center gap-1 text-[0.65rem] text-white/40">👥 {ev.capacity}</span>
      </div>
      <div className="mt-auto pt-4 border-t border-white/[0.07] flex items-center justify-between">
        {isPast ? (
          <span className="text-white/30 text-xs font-semibold">Event Completed</span>
        ) : (
          <a href="mailto:info@gacosya.or.ke" className="text-[#ff6b8a] text-sm font-semibold hover:text-white transition-colors">
            Register →
          </a>
        )}
        <div className="flex flex-wrap gap-1">
          {ev.highlights.slice(0, 2).map((h) => (
            <span key={h} className="text-[0.6rem] bg-white/[0.05] border border-white/10 text-white/45 px-2 py-0.5 rounded-full">{h}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function Events() {
  useReveal();
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState("upcoming");

  const fadeUp   = "reveal-el opacity-0 translate-y-8 transition-all duration-700 ease-out";
  const fadeLeft = "reveal-el opacity-0 -translate-x-8 transition-all duration-700 ease-out";

  const filtered = ALL_EVENTS.filter((ev) => {
    const catMatch = activeFilter === "All" || ev.type === activeFilter;
    const tabMatch = ev.status === activeTab;
    return catMatch && tabMatch;
  });

  const featured = filtered.filter((ev) => ev.featured);
  const regular  = filtered.filter((ev) => !ev.featured);

  const upcomingCount = ALL_EVENTS.filter((e) => e.status === "upcoming").length;
  const pastCount     = ALL_EVENTS.filter((e) => e.status === "past").length;

  return (
    <div className="font-['Outfit',sans-serif] text-[#111827] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .pulse-dot { animation: pulse-dot 2s infinite; }
        .marquee   { animation: marquee 30s linear infinite; }
        .float1    { animation: float1 4s ease-in-out infinite; }
        .line-clamp-3 { display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden; }
        .filter-btn { transition: all 0.25s ease; }
      `}</style>

      {/* ── HERO ───────────────────────────────────── */}
      <section className="min-h-[60vh] relative flex items-center bg-[#111827] overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_60%_40%,rgba(179,0,45,0.16)_0%,transparent_60%),linear-gradient(135deg,#0a0f1a_0%,#111827_60%,#1a0a10_100%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
          <div className={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              <span className="pulse-dot w-1.5 h-1.5 bg-[#B3002D] rounded-full" />
              Events & Activities
            </div>
            <h1 className="playfair text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-6 max-w-4xl">
              Where Garissa Youth{" "}
              <em className="text-[#B3002D] not-italic">Come Together</em>
            </h1>
            <p className="text-white/60 text-lg leading-[1.8] max-w-2xl mb-12">
              From high-level summits and entrepreneurship bootcamps to cultural festivals and sports days — GACOSYA keeps Garissa's youth engaged, connected, and empowered all year round.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {[
                { num: upcomingCount, label: "Upcoming Events", icon: "📅" },
                { num: "6", label: "Sub-Counties Covered", icon: "🗺️" },
                { num: "2K+", label: "Attendees in 2024", icon: "👥" },
                { num: pastCount, label: "Past Events", icon: "✅" },
              ].map((s) => (
                <div key={s.label} className="bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="playfair text-3xl text-white font-black">{s.num}</div>
                  <div className="text-[0.68rem] text-white/45 mt-1 uppercase tracking-[0.06em] leading-tight">{s.label}</div>
                </div>
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
              {["Summit", "Bootcamp", "Sports Day", "Dialogue", "Cultural Festival", "Networking", "Workshop", "Awards"].map((w) => (
                <span key={w} className="text-white font-semibold text-sm tracking-widest uppercase flex items-center gap-4">
                  {w} <span className="text-white/40">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── FILTER BAR ──────────────────────────────── */}
      <section className="py-12 bg-[#0d1421] border-b border-white/[0.07] sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Status tabs */}
            <div className="flex gap-2 bg-white/[0.05] border border-white/10 rounded-full p-1">
              {["upcoming", "past"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all border-none cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#B3002D] text-white shadow-[0_4px_16px_rgba(179,0,45,0.4)]"
                      : "bg-transparent text-white/50 hover:text-white"
                  }`}
                >
                  {tab} ({tab === "upcoming" ? upcomingCount : pastCount})
                </button>
              ))}
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`filter-btn px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border cursor-pointer ${
                    activeFilter === cat
                      ? "bg-[#B3002D] border-[#B3002D] text-white"
                      : "bg-transparent border-white/15 text-white/50 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENTS ─────────────────────────── */}
      {featured.length > 0 && (
        <section className="py-20 bg-[#111827] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(179,0,45,0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-[1280px] mx-auto px-8">
            <div className={`${fadeUp} mb-10`}>
              <div className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.15)] border border-[rgba(201,168,76,0.3)] text-[#C9A84C] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-4">
                ⭐ Featured Events
              </div>
            </div>
            <div className={`${fadeUp} flex flex-col gap-6`}>
              {featured.map((ev) => <FeaturedCard key={ev.id} ev={ev} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── ALL EVENTS GRID ─────────────────────────── */}
      <section className="py-20 bg-[#0d1421] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(179,0,45,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`${fadeUp} mb-10`}>
            <h2 className="playfair text-3xl text-white">
              {activeTab === "upcoming" ? "All Upcoming Events" : "Past Events"}{" "}
              <span className="text-white/30 text-2xl">({regular.length})</span>
            </h2>
          </div>

          {regular.length === 0 ? (
            <div className={`${fadeUp} text-center py-20`}>
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-white/40 text-lg">No events match your current filter.</p>
              <button onClick={() => setActiveFilter("All")} className="mt-4 text-[#ff6b8a] text-sm font-semibold hover:text-white transition-colors cursor-pointer bg-transparent border-none">
                Clear filter →
              </button>
            </div>
          ) : (
            <div className={`${fadeUp} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
              {regular.map((ev) => <EventCard key={ev.id} ev={ev} />)}
            </div>
          )}
        </div>
      </section>

      {/* ── PROPOSE AN EVENT ────────────────────────── */}
      <section className="py-28 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(179,0,45,0.10)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.5) 40px,rgba(255,255,255,0.5) 41px)" }} />

        <div className="relative z-10 max-w-[900px] mx-auto px-8">
          <div className={`${fadeUp} text-center mb-14`}>
            <div className="inline-flex items-center gap-2 bg-[rgba(179,0,45,0.15)] border border-[rgba(179,0,45,0.3)] text-[#ff6b8a] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              Get Involved
            </div>
            <h2 className="playfair text-4xl lg:text-5xl text-white leading-tight mb-4">
              Have an Idea for an{" "}
              <em className="text-[#B3002D] not-italic">Event or Activity?</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed max-w-2xl mx-auto">
              GACOSYA is youth-led — which means our calendar is shaped by you. Whether it's a community dialogue, a skills workshop, or a cultural celebration, we want to hear your ideas.
            </p>
          </div>

          <div className={`${fadeUp} grid grid-cols-1 md:grid-cols-3 gap-5`}>
            {[
              { icon: "💡", title: "Propose an Event", desc: "Submit your event concept to the Programs team for review. We provide logistics support, venue access, and promotion.", cta: "Submit Idea", href: "mailto:programs@gacosya.or.ke" },
              { icon: "🤝", title: "Sponsor an Event", desc: "Partner with GACOSYA to sponsor events that align with your brand values and reach Garissa's most engaged youth audience.", cta: "Become a Sponsor", href: "mailto:partnerships@gacosya.or.ke" },
              { icon: "🙋", title: "Volunteer to Help", desc: "Join our events team and help with logistics, communications, registration, and coordination for upcoming events.", cta: "Volunteer Now", href: "mailto:volunteer@gacosya.or.ke" },
            ].map((c) => (
              <div key={c.title} className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] hover:border-[rgba(179,0,45,0.25)] transition-all group text-center">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="playfair text-xl text-white mb-3 group-hover:text-[#ff6b8a] transition-colors">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{c.desc}</p>
                <a href={c.href} className="inline-flex items-center gap-1.5 bg-[rgba(179,0,45,0.12)] border border-[rgba(179,0,45,0.25)] text-[#ff6b8a] px-5 py-2 rounded-full text-xs font-bold tracking-wide no-underline hover:bg-[#B3002D] hover:text-white hover:border-[#B3002D] transition-all">
                  {c.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE TO CALENDAR ───────────────────── */}
      <section className="py-20 bg-[#0d1421]">
        <div className="max-w-[700px] mx-auto px-8 text-center">
          <div className={fadeUp}>
            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#B3002D] to-transparent" />
              <div className="text-4xl mb-4">📅</div>
              <h3 className="playfair text-3xl text-white mb-3">Never Miss an Event</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Subscribe to our events newsletter and get notified about upcoming summits, workshops, and activities before public announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Enter your email address" className="flex-1 bg-white/[0.06] border border-white/15 rounded-full px-5 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-[rgba(179,0,45,0.5)] transition-colors" />
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