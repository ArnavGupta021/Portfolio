export default function Experience() {
  const experiences = [
    {
  role: "Python Intern",
  company: "Infosys Springboard",
  duration: "August 2025 – December 2025",
  details: [
    "Developed an AI-powered Contract Language Simplifier to convert complex legal text into simple English using Python and NLP.",
    "Implemented text summarization, keyword extraction, and readability analysis using Transformers, spaCy, and textstat.",
    "Built an interactive Streamlit web app for uploading and analyzing contract documents in real time.",
    "Integrated authentication and automated document processing to improve accessibility and user experience.",
    "Gained hands-on experience in NLP, AI model integration, and real-world application development."
  ],
},

    {
      role: "Full-Stack & ML Project Developer",
      company: "Self / Academic",
      duration: "2023 – Present",
      details: [
        "Built full-stack applications using React, FastAPI, Node.js and MongoDB.",
        "Developed ML-based solutions such as toxic comment classification.",
        "Practiced scalable system design and DSA problem solving.",
      ],
    },
  ];

  return (
    <section id="experience" className="space-y-10">

      {/* Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-semibold tracking-wide">
          <span className="bg-gradient-to-r from-cyan-300 to-violet-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="mt-2 h-1 w-24 mx-auto md:ml-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.7)]" />
      </div>

      {/* Timeline */}
      <div className="relative ml-4 space-y-10 border-l border-cyan-400/30">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10 group">

            {/* Neon Dot */}
            <div
              className="
                absolute -left-[11px] top-1 w-5 h-5 rounded-full
                bg-gradient-to-r from-cyan-400 to-violet-500
                shadow-[0_0_25px_rgba(56,189,248,0.9)]
                transition-all duration-500 group-hover:shadow-[0_0_45px_rgba(56,189,248,1)]
              "
            />

            {/* CARD */}
            <div
              className="
                group relative rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl p-6
                shadow-[0_0_35px_rgba(56,189,248,0.6)]
                transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_55px_rgba(56,189,248,1)]
              "
            >
              {/* glowing layer */}
              <div
                className="
                  absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/25 to-violet-600/25 blur-2xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700
                "
              />

              <div className="relative z-10 space-y-1">
                <h3 className="text-lg font-semibold text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
                  {exp.role}
                </h3>
                <p className="text-sm text-violet-300 font-medium">{exp.company}</p>
                <p className="text-xs text-slate-400 mt-1">{exp.duration}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {exp.details.map((d, i) => (
                    <li key={i} className="leading-relaxed">• {d}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
