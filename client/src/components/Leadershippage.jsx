import { useEffect } from "react";

// ─── Google Fonts ────────────────────────────────────────────────────────────
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600;700&display=swap";

// ─── Intersection-observer reveal hook (identical to original) ───────────────
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

// ─── Shared animation class (identical to original) ──────────────────────────
const fadeUp = "reveal-el opacity-0 translate-y-8 transition-all duration-700 ease-out";
const fadeLeft = "reveal-el opacity-0 -translate-x-8 transition-all duration-700 ease-out";
const fadeRight = "reveal-el opacity-0 translate-x-8 transition-all duration-700 ease-out";

// ─── Data ────────────────────────────────────────────────────────────────────

const patrons = [
  {
    initials: "AG",
    emoji: "⭐",
    badge: "🏛️ County Government",
    role: "Grand Patron",
    title: "Governor, Garissa County\nGovernment of Kenya",
    featured: true,
  },
  {
    initials: "SP",
    emoji: "🎓",
    badge: "⚖️ Senate of Kenya",
    role: "Patron",
    title: "Senator, Garissa County\nSenate of Kenya",
    featured: false,
  },
  {
    initials: "WP",
    emoji: "🤝",
    badge: "🌸 Gender & Inclusion",
    role: "Patron",
    title: "Women's Rep, Garissa County\nNational Assembly",
    featured: false,
  },
];

const necMembers = [
  { initials: "CH", emoji: "👑", role: "Chairperson",             title: "National Executive Committee" },
  { initials: "SG", emoji: "📋", role: "Secretary General",       title: "National Executive Committee" },
  { initials: "OS", emoji: "⚙️",  role: "Organizing Secretary",   title: "National Executive Committee" },
  { initials: "PR", emoji: "📢", role: "PR & Communications",     title: "National Executive Committee" },
  { initials: "TR", emoji: "💰", role: "Treasurer",               title: "National Executive Committee" },
  { initials: "AG", emoji: "⚖️",  role: "Auditor General",        title: "National Executive Committee" },
  { initials: "GD", emoji: "👩", role: "Gender & Diversity",      title: "National Executive Committee" },
  { initials: "RD", emoji: "💡", role: "Research & Development",  title: "National Executive Committee" },
];

const constituencies = [
  { name: "Garissa Township Constituency", short: "Garissa Township" },
  { name: "Balambala Constituency",        short: "Balambala"        },
  { name: "Lagdera Constituency",          short: "Lagdera"          },
  { name: "Dadaab Constituency",           short: "Dadaab"           },
  { name: "Fafi Constituency",             short: "Fafi"             },
  { name: "Ijara Constituency",            short: "Ijara"            },
];

const advisors = [
  {
    initials: "ED",
    role: "Education Advisor",
    docket: "Academic Excellence Docket",
    desc: "Provides guidance on scholarship programs, university partnerships, and academic support for GACOSYA members.",
  },
  {
    initials: "EA",
    role: "Economic Advisor",
    docket: "Enterprise & Livelihoods Docket",
    desc: "Expert in youth enterprise development, micro-finance, and economic empowerment strategies in arid and semi-arid counties.",
  },
  {
    initials: "LA",
    role: "Legal Advisor",
    docket: "Governance & Compliance Docket",
    desc: "Ensures GACOSYA operates within Kenya's legal frameworks, including the Societies Act, youth policy, and county statutes.",
  },
  {
    initials: "HA",
    role: "Health Advisor",
    docket: "Health & Wellness Docket",
    desc: "Champions youth mental health, reproductive health awareness, and access to medical services across all six constituencies.",
  },
  {
    initials: "TA",
    role: "Technology Advisor",
    docket: "Digital Innovation Docket",
    desc: "Leads the digital transformation agenda — from GACOSYA's online presence to digital literacy training programs.",
  },
  {
    initials: "CA",
    role: "Climate Advisor",
    docket: "Environment & Climate Docket",
    desc: "Guides GACOSYA's climate resilience initiatives, reforestation drives, and environmental advocacy in Garissa County.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function SocialLinks() {
  return (
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
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <span
      className={`inline-block text-xs font-bold tracking-[0.12em] uppercase mb-3 ${
        light ? "text-[#C9A84C]" : "text-[#B3002D]"
      }`}
    >
      {children}
    </span>
  );
}

function Divider() {
  return <div className="w-14 h-[3px] bg-[#B3002D] rounded-full mx-auto mt-5" />;
}

// ─── Section 1 · Hero Band ────────────────────────────────────────────────────
function HeroBand() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#2d1a24] py-20 px-8">
      {/* radial glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(179,0,45,0.18)_0%,transparent_70%)]" />
      {/* watermark */}
      <span className="playfair pointer-events-none absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[clamp(80px,14vw,160px)] font-black text-white/[0.03] whitespace-nowrap tracking-widest select-none">
        LEADERSHIP
      </span>

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-8">
        {/* text */}
        <div className={fadeUp}>
          <SectionLabel light>Governance</SectionLabel>
          <h1 className="playfair text-white text-4xl lg:text-5xl leading-tight mb-4 max-w-[560px]">
            Leadership &amp;<br />Governance Structure
          </h1>
          <p className="text-white/60 text-lg leading-[1.75] max-w-[520px]">
            GACOSYA is led by elected, accountable youth leaders who champion the aspirations of every student and young person across Garissa County's six constituencies.
          </p>
        </div>

        {/* stats */}
        <div className={`${fadeUp} flex gap-10 flex-wrap`} style={{ transitionDelay: "0.2s" }}>
          {[["6","Constituencies"],["24","Leaders"],["1","Vision"]].map(([num, lbl]) => (
            <div key={lbl} className="text-center">
              <div className="playfair text-[#B3002D] text-5xl font-black leading-none">{num}</div>
              <div className="mt-1 text-[0.72rem] font-semibold text-white/50 uppercase tracking-widest">{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Section 2 · Patrons ─────────────────────────────────────────────────────
function PatronsSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className={`${fadeUp} text-center mb-14`}>
          <SectionLabel>Guidance &amp; Oversight</SectionLabel>
          <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-4">Patrons &amp; Advisors</h2>
          <p className="text-[#6B7280] text-lg leading-[1.75] max-w-xl mx-auto">
            Distinguished community leaders who provide mentorship, guidance, and institutional credibility to GACOSYA's mission.
          </p>
          <Divider />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {patrons.map((p, i) => (
            <div
              key={p.role + i}
              className={`${fadeUp} relative flex flex-col items-center text-center rounded-[24px] overflow-hidden border p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                borderColor: p.featured ? "#C9A84C" : "#E5E7EB",
                background: p.featured
                  ? "linear-gradient(145deg,#fff 0%,#fdf6f0 100%)"
                  : "linear-gradient(145deg,#fff 0%,#fdf6f8 100%)",
              }}
            >
              {p.featured && (
                <span className="absolute top-4 right-4 bg-[#C9A84C] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  PATRON
                </span>
              )}

              {/* avatar */}
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center relative mb-5"
                style={{
                  background: "linear-gradient(135deg,rgba(179,0,45,0.18),rgba(17,24,39,0.08))",
                  border: p.featured ? "3px solid #C9A84C" : "3px solid transparent",
                }}
              >
                <span className="playfair text-4xl text-[#B3002D] opacity-75">{p.initials}</span>
                <span className="absolute bottom-1 right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center text-base shadow-md">
                  {p.emoji}
                </span>
              </div>

              <div className="font-bold text-lg mb-1">
                {p.featured ? "Chief Patron" : p.role === "Patron" ? (p.initials === "SP" ? "Senior Patron" : "Women's Representative") : p.role}
              </div>
              <div className="text-[#B3002D] text-[0.72rem] font-bold uppercase tracking-wider mb-2">{p.role}</div>
              <div className="text-[#6B7280] text-sm leading-relaxed mb-4 whitespace-pre-line">{p.title}</div>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(179,0,45,0.08)] text-[#B3002D] text-[0.72rem] font-semibold px-3 py-1 rounded-full mb-4">
                {p.badge}
              </span>
              <SocialLinks />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3 · National Executive Committee (original + expanded) ───────────
function NECSection() {
  return (
    <section id="leadership" className="py-24 px-8 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto">
        <div className={`${fadeUp} text-center mb-12`}>
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-4">National Executive Committee</h2>
          <p className="text-[#6B7280] text-lg leading-[1.75] max-w-xl mx-auto">
            Led by passionate, dedicated youth committed to transforming Garissa County through ethical and visionary leadership.
          </p>
          <Divider />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {necMembers.map((l, i) => (
            <div
              key={l.role}
              className={`${fadeUp} bg-white rounded-[20px] overflow-hidden border border-[#E5E7EB] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 text-center`}
              style={{ transitionDelay: `${(i % 4) * 0.1}s` }}
            >
              <div className="w-full aspect-square bg-gradient-to-br from-[rgba(179,0,45,0.12)] to-[rgba(17,24,39,0.08)] flex items-center justify-center relative overflow-hidden">
                <span className="absolute text-[6rem] opacity-[0.05]">{l.emoji}</span>
                <span className="playfair text-5xl text-[#B3002D] opacity-70 relative z-10">{l.initials}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-1">{l.role}</h3>
                <p className="text-[#B3002D] text-xs font-semibold mb-3">{l.title}</p>
                <SocialLinks />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4 · Constituency Representatives ────────────────────────────────
function ConstituencyReps() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* intro row */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-14">
          <div className={fadeLeft}>
            <SectionLabel>Grassroots Representation</SectionLabel>
            <h2 className="playfair text-4xl lg:text-5xl leading-tight">
              Constituency<br />Representatives
            </h2>
          </div>
          <p className={`${fadeRight} text-[#6B7280] text-lg leading-[1.75] max-w-[440px]`} style={{ transitionDelay: "0.15s" }}>
            Each of Garissa County's six constituencies is represented by dedicated student leaders who serve as the direct voice of youth in their communities.
          </p>
        </div>

        {/* constituencies */}
        {constituencies.map((c, ci) => (
          <div key={c.name} className={`${fadeUp} mb-10`} style={{ transitionDelay: `${ci * 0.06}s` }}>
            {/* label */}
            <div className="flex items-center gap-3 font-bold text-[0.82rem] uppercase tracking-widest text-[#374151] mb-4 pb-3 border-b-2 border-[#E5E7EB]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B3002D] flex-shrink-0" />
              {c.name}
            </div>
            {/* rep cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { pos: "Chairperson",    abbr: c.short[0] + "C" },
                { pos: "Secretary",      abbr: c.short[0] + "S" },
                { pos: "Treasurer",      abbr: c.short[0] + "T" },
              ].map((r) => (
                <div
                  key={r.pos}
                  className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl px-5 py-4 transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:bg-white"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(179,0,45,0.10)] flex items-center justify-center flex-shrink-0 playfair text-[#B3002D] font-bold text-lg">
                    {r.abbr}
                  </div>
                  <div>
                    <div className="font-semibold text-[0.88rem]">{r.pos}</div>
                    <div className="text-[#6B7280] text-[0.75rem]">{c.short}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Section 5 · Advisory Board (dark) ───────────────────────────────────────
function AdvisoryBoard() {
  return (
    <section className="relative overflow-hidden py-24 px-8 bg-gradient-to-br from-[#111827] to-[#1a1f2e]">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(179,0,45,0.12)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className={`${fadeUp} text-center mb-14`}>
          <SectionLabel light>Strategic Counsel</SectionLabel>
          <h2 className="playfair text-white text-4xl lg:text-5xl leading-tight mb-4">Advisory Board</h2>
          <p className="text-white/60 text-lg leading-[1.75] max-w-xl mx-auto">
            Experienced professionals and academics who provide strategic counsel, sector expertise, and mentorship to guide GACOSYA's long-term trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((a, i) => (
            <div
              key={a.role}
              className={`${fadeUp} flex gap-5 bg-white/5 border border-white/10 rounded-[20px] p-7 transition-all duration-300 hover:bg-white/[0.09] hover:border-[rgba(179,0,45,0.4)] hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(179,0,45,0.2)] flex items-center justify-center flex-shrink-0 playfair text-white font-bold text-xl">
                {a.initials}
              </div>
              <div>
                <div className="font-bold text-white text-[0.95rem] mb-1">{a.role}</div>
                <div className="text-[#C9A84C] text-[0.75rem] font-semibold mb-2">{a.docket}</div>
                <div className="text-white/50 text-[0.82rem] leading-relaxed">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 6 · Org Chart ───────────────────────────────────────────────────
function OrgStructure() {
  const Line = () => (
    <div className="w-[2px] h-8 bg-[#E5E7EB] mx-auto" />
  );
  const HLine = () => (
    <div className="w-4/5 h-[2px] bg-[#E5E7EB] mx-auto" />
  );

  return (
    <section className="py-24 px-8 bg-[#F8FAFC]">
      <div className="max-w-[1280px] mx-auto">
        <div className={`${fadeUp} text-center mb-14`}>
          <SectionLabel>Governance Architecture</SectionLabel>
          <h2 className="playfair text-4xl lg:text-5xl leading-tight mb-4">Organisational Structure</h2>
          <p className="text-[#6B7280] text-lg leading-[1.75] max-w-xl mx-auto">
            A transparent, devolved structure that ensures every voice — from county to constituency — is heard and represented.
          </p>
          <Divider />
        </div>

        <div className={`${fadeUp} flex flex-col items-center`} style={{ transitionDelay: "0.15s" }}>
          {/* L1 */}
          <div className="bg-white border-2 border-[#B3002D] rounded-[14px] px-6 py-3 text-center min-w-[180px] shadow-[0_4px_20px_rgba(179,0,45,0.12)]">
            <div className="text-[#6B7280] text-xs mb-0.5">Apex Body</div>
            <div className="font-bold text-[#B3002D]">Patrons</div>
          </div>
          <Line />

          {/* L2 */}
          <div className="bg-white border-2 border-[#B3002D] rounded-[14px] px-6 py-3 text-center min-w-[240px] shadow-[0_4px_20px_rgba(179,0,45,0.12)]">
            <div className="text-[#6B7280] text-xs mb-0.5">Elected Leadership</div>
            <div className="font-bold text-[#B3002D]">National Executive Committee</div>
          </div>
          <Line />

          {/* L3 */}
          <div className="flex gap-6 flex-wrap justify-center">
            {[["Strategic Counsel","Advisory Board"],["Financial Oversight","Audit & Finance"]].map(([label, role]) => (
              <div key={role} className="bg-white border border-[#E5E7EB] rounded-[14px] px-5 py-3 text-center min-w-[160px]">
                <div className="text-[#6B7280] text-xs mb-0.5">{label}</div>
                <div className="font-bold text-sm">{role}</div>
              </div>
            ))}
          </div>
          <Line />
          <HLine />
          <Line />

          {/* L4 */}
          <div className="flex gap-3 flex-wrap justify-center">
            {constituencies.map((c) => (
              <div key={c.short} className="bg-white border border-[#E5E7EB] rounded-[12px] px-4 py-2.5 text-center text-sm font-semibold">
                {c.short}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7 · Elections Banner ────────────────────────────────────────────
function ElectionsBanner() {
  return (
    <div className={`${fadeUp} bg-[#B3002D] py-16 px-8 text-center text-white`}>
      <h3 className="playfair text-3xl lg:text-4xl mb-4">Elections &amp; Accountability</h3>
      <p className="text-white/80 text-lg max-w-[520px] mx-auto mb-7 leading-[1.75]">
        GACOSYA leadership is elected democratically by members from all six constituencies. Annual general meetings ensure accountability, transparency, and renewal of mandate.
      </p>
      <a
        href="#"
        className="inline-block bg-white text-[#B3002D] font-bold text-sm px-8 py-4 rounded-full tracking-wide no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
      >
        View Election Calendar →
      </a>
    </div>
  );
}

// ─── Root Page Component ─────────────────────────────────────────────────────
export default function LeadershipPage() {
  useReveal();

  return (
    <div className="font-['Outfit',sans-serif] text-[#111827] overflow-x-hidden">
      <style>{`
        @import url('${FONT_URL}');
        .playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      <HeroBand />
      <PatronsSection />
      <NECSection />
      <ConstituencyReps />
      <AdvisoryBoard />
      <OrgStructure />
      <ElectionsBanner />
    </div>
  );
}