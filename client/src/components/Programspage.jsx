
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

export default function ProgramsPage() {
  useReveal();

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

  const fadeUp = "reveal-el opacity-0 translate-y-8 transition-all duration-700 ease-out";

  return (
    <div className="font-['Outfit',sans-serif] text-[#111827] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }
        .swiper-pagination-bullet { background: rgba(255,255,255,0.4) !important; }
        .swiper-pagination-bullet-active { background: #B3002D !important; }
        .prog-card-bar { transform: scaleX(0); transform-origin: left; transition: transform 0.3s; }
        .prog-card:hover .prog-card-bar { transform: scaleX(1); }
      `}</style>

      {/* PROGRAMS */}
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

      {/* IMPACT STATS */}
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

      {/* WHY JOIN */}
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

      {/* FEATURED INITIATIVES SLIDER */}
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

      {/* CTA */}
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
            <a href="mailto:infogacosya007@gmail.com" className="bg-white text-[#B3002D] px-9 py-3.5 rounded-full font-bold text-base no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,0,0,0.2)] transition-all">
              Become a Member
            </a>
            <a href="mailto:infogacosya007@gmail.com" className="bg-transparent text-white px-9 py-3.5 rounded-full font-semibold text-base no-underline border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all">
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}