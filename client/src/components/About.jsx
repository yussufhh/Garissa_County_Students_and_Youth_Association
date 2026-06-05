
import { useEffect } from "react";
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

export default function AboutPage() {
  useReveal();

  const fadeLeft  = "reveal-el opacity-0 -translate-x-8 transition-all duration-700 ease-out";
  const fadeRight = "reveal-el opacity-0 translate-x-8 transition-all duration-700 ease-out";
  const fadeUp    = "reveal-el opacity-0 translate-y-8 transition-all duration-700 ease-out";

  const values = [
    { icon: "🤝", title: "Unity", desc: "Togetherness across ethnic, religious, and social lines — one Garissa, one voice." },
    { icon: "🔭", title: "Vision", desc: "Forward-thinking solutions and long-term development for sustainable community growth." },
    { icon: "📈", title: "Progress", desc: "Committed to continuous growth, learning, and measurable community impact." },
    { icon: "⚖️", title: "Integrity", desc: "Upholding honesty, fairness, and transparency in all operations and decisions." },
    { icon: "🦁", title: "Leadership", desc: "Promoting ethical, responsible, and youth-centered leadership at every level." },
  ];

  return (
    <div className="font-['Outfit',sans-serif] text-[#111827] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600;700&display=swap');
        .playfair { font-family: 'Playfair Display', serif; }
        .value-card-overlay { opacity: 0; transition: opacity 0.3s; }
        .value-card:hover .value-card-overlay { opacity: 1; }
      `}</style>

      {/* ABOUT */}
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
                <div key={mv.label} className="bg-white rounded-2xl p-5 border-l-4 border-[#B3002D] shadow-sm">
                  <h4 className="text-[0.72rem] text-[#B3002D] font-bold uppercase tracking-[0.1em] mb-2">{mv.label}</h4>
                  <p className="text-[0.88rem] text-[#1f2937] leading-[1.6]">{mv.text}</p>
                </div>
              ))}
            </div>

            <a href="#programs" className="inline-block bg-[#B3002D] text-white px-8 py-3.5 rounded-full font-bold no-underline hover:bg-[#8a0022] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(179,0,45,0.45)] transition-all">
              Discover Our Work
            </a>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
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
    </div>
  );
}