"use client";
import React, { useState } from "react";

const primary = "#4FC3F7";

const DATA = {
  profile: {
    name: "Lin Hanghao",
    title: "Ph.D. Candidate | Catalysis & CO₂ Utilization",
    org: "Osaka Metropolitan University (OMU)",
    email: "sw23117l@st.omu.ac.jp",
    linkedin: "https://www.linkedin.com/in/hanghao-lin-3711b2228",
    selfinterview:"https://www.omu.ac.jp/eng/intst/why_omu/voice01/",
    avatar: "/picture.jpg",
    background:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  },

  about: {
    summary:
      "Experienced in air‑sensitive synthesis and catalyst preparation; advanced characterization (XRD, XPS, TEM/SEM, FTIR, TPD), in‑situ spectroscopy, and kinetic analysis. Research focuses on direct polycarbonate synthesis from CO₂ and diols over CeO₂‑based catalysts.",
    interests: [
      {
        title: "Catalysis & CO₂ Utilization",
        links: [
          { label: "PCDL from CO₂", href: "" },
          { label: "Solvent effects", href: "" },
        ],
      },
      {
        title: "In‑situ Spectroscopy",
        links: [
          { label: "DRIFTS–MS", href: "" },
          { label: "FTIR co‑adsorption", href: "" },
        ],
      },
      {
        title: "Characterization",
        links: [
          { label: "CO₂‑TPD", href: "" },
          { label: "XPS/XRD", href: "" },
        ],
      },
    ],
    education: [
      {
        school: "Osaka Metropolitan University",
        degree:
          "Ph.D. in Science & Engineering for Materials, Chemistry & Bioengineering",
        time: "Apr. 2025 – now",
        advisor:
          "Research: Direct polycarbonate synthesis from CO₂ and secondary diols",
      },
      {
        school: "Osaka Metropolitan University",
        degree:
          "M.Sc. in Science & Engineering for Materials, Chemistry & Bioengineering",
        time: "Apr. 2023 – Mar. 2025",
        advisor:
          "Research: Direct synthesis of polycarbonate diols from flow CO₂ and1,6-hexanediol over alkaline earth metal oxide-modified CeO₂",
      },
      {
        school: "Zhejiang Gongshang University",
        degree: "B.Eng. in Environmental Science & Engineering",
        time: "Sep. 2016 – Jun. 2022",
      },
    ],
  },

  researchExperiences: [
    {
      org: "NEDO, Japan",
      title:
        "Direct synthesis of polycarbonate diols from flow CO₂ and 1,6‑hexanediol over alkaline‑earth oxide–modified CeO₂",
      period: "2023 – 2025",
      summary:
        "Catalyst design, reaction engineering, and polymer characterization.",
      files: [
        { label: "Overview (PDF)", href: "/uploads/Research experiment/Metal/html/index.html" },
        // { label: "Results (PPTX)", href: "" },
        // { label: "Data (XLSX/CSV)", href: "" },
      ],
    },
    {
      org: "JST CREST, Japan",
      title:
        "Direct synthesis of polycarbonate diols with tunable molecular weights from atmospheric flow CO₂ and diols",
      period: "2023 – 2025",
      summary: "Solvent effects and basicity tuning on CeO₂ (Ba/Sr/Mg/Ca).",
      files: [
        { label: " Overview(PDF)", href: "/uploads/Research experiment/Slovent/html/index.html" },
        // { label: "Kinetics (PPTX)", href: "" },
        // { label: "NMR / GPC data", href: "" },
      ],
    },
    {
      org: "NSFC, China",
      title:
        "Plasma‑catalytic oxidation of graphitic carbon over Au/γ‑Al₂O₃ via in‑situ DRIFTS–MS",
      period: "2017 – 2019",
      summary: "In‑situ plasma spectroscopy; CO₂ desorption stimulation.",
      files: [
          // { label: "Dataset", href: "/" },
        { label: "Overview (PDF)", href: "/uploads/Research experiment/In‑situ DRIFTS–MS/html/index.html" }],
    },
  ],

  researchSkills: [
    {
      name: "Catalyst & Material Synthesis",
      detail:
        "Impregnation, deposition–precipitation, hydrothermal; glovebox; air/moisture‑sensitive reactions; metal complex chemistry.",
      links: [
         { label: "Catalyst synthesis", href: "/uploads/Research skills/Catalyst  Material Synthesis/html/index.html" },
        // { label: "代表样品数据", href: "" },
      ],
    },
    {
      name: "In situ spectroscopy",
      detail: "DRIFTS–MS; FTIR of CO₂/alcohol adsorption; SPring‑8 XAS.",
      links: [
        { label: "Transmission FTIR and situ plasma DRIFTS", href: "/uploads/Research skills/In situ/html/index.html" },
        // { label: "gas-phase oxidation", href: "" },
      ],
    },
    {
      name: "Characterization Technique",
      detail:
        "",
      links: [
        { label: "FTIR", href: "/uploads/Research skills/Charcterization techique/FTIR/html/index.html" },
        { label: "SEM and TEM", href: "/uploads/Research skills/Charcterization techique/SEM and TEM/html/index.html" },
        { label: "TPX", href: "/uploads/Research skills/Charcterization techique/TPX/html/index.html" },
        // { label: "XAS", href: "" },
        { label: "XPS", href: "/uploads/Research skills/Charcterization techique/XPS/html/index.html" },
        // { label: "XRD", href: "" },
      ],
    },
    {
      name: "Data Analysis & Automation",
      detail: "Python for visualization/kinetics; VBA batch processing.",
      links: [ { label: "Kinetics", href: "/uploads/Research skills/Charcterization techique/Kinetics/html/index.html" },
         { label: "Python", href: "/uploads/Research skills/Charcterization techique/Python/html/index.html" },
        // { label: "VBA", href: "" },
      ],
    },
  ],

  activities: [
    {
      title: "ICCDU, Lisbon (Oral)",
      date: "Jun. 2025",
      image: "/uploads/Activity/ICCDU/ICCDU_240625_0116©️ João Azevedo.jpg",
      href: "",
    },
    {
      title: "ICCDU, Lisbon (Oral)",
      date: "Jun. 2025",
      image: "/uploads/Activity/ICCDU/ICCDU_250625_0181©️ João Azevedo.jpg",
      href: "",
    },
    {
      title: "ICCDU, Lisbon (Oral)",
      date: "Jun. 2025",
      image: "/uploads/Activity/ICCDU/ICCDU_260625_0220©️ João Azevedo (2).jpg",
      href: "",
    },
    {
      title: "ICCDU, Lisbon (Oral)",
      date: "Jun. 2025",
      image: "/uploads/Activity/ICCDU/ICCDU_260625_0421©️ João Azevedo.jpg",
      href: "",
    },
    {
      title: "54th Petroleum & Petrochemical Discussion, Hiroshima (Oral)",
      date: "Nov. 2024",
      image: "/uploads/Activity/54th Petroleum & Petrochemical Discussion, Hiroshima/1.jpg",
      href: "",
    },
    {
      title: "134th Catalysis Discussion, Nagoya (Oral)",
      date: "Sep. 2024",
      image: "/uploads/Activity/134th Catalysis Discussion, Nagoya/1.jpg",
      href: "",
    },
  ],

  projects: [
    {
      name: "BaO–CeO₂ for Direct CO₂–Diol Polycarbonate",
      desc: "Basicity tuning; MW control ~7.7k.",
      image: "https://placehold.co/640x360/png?text=PCDL",
      href: "",
    },
    {
      name: "CO₂ Adsorption / TPD–DFT Correlation",
      desc: "Relating site strength distributions to kinetics.",
      image: "https://placehold.co/640x360/png?text=CO2-TPD",
      href: "",
    },
  ],

  awards: [
    {
      title: "Outstanding Research, OKCAT 2024",
      date: "Feb. 2025",
      image: "/uploads/Award/Outstanding Research, OKCAT 2024/3.jpg",
      proof: "",
    },
    {
      title: "Best Poster, 2nd CJSC",
      date: "Nov. 2024",
      image: "/award-cjsc.jpg",
      proof: "",
    },
    {
      title: "Outstanding Research, OKCAT 2024",
      date: "Nov. 2024",
      image: "/award-okcat.jpg",
      proof: "",
    },
  ],
};

function AnchorLink({ to, label }: { to: string; label: string }) {
  return (
    <a
      href={`#${to}`}
      className="px-3 py-2 text-sm font-semibold rounded hover:bg-gray-100"
      style={{ color: "#111" }}
    >
      {label}
    </a>
  );
}

function Title({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xl" style={{ color: primary }}>{icon}</span>
      <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#222" }}>{text}</h3>
    </div>
  );
}

function Collapsible({ header, children }: { header: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg mb-3 bg-white overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left bg-gray-50 hover:bg-gray-100"
      >
        <div>{header}</div>
        <span className="text-lg" style={{ color: primary }}>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="p-4">{children}</div>}
    </div>
  );
}

function Card({ image, title, subtitle, href }: any) {
  const Wrapper: any = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`block bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition ${
        href ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="font-semibold" style={{ color: primary }}>
          {title}
        </div>
        {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      </div>
    </Wrapper>
  );
}

export default function PersonalHomepage() {
  const p = DATA.profile;
  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Top Nav */}
      <div className="fixed top-0 left-0 right-0 z-40 border-b bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 h-12 flex items-center gap-2">
          <div className="font-bold mr-2" style={{ color: "#222" }}>Biography</div>
          <div className="flex-1 flex items-center gap-1 text-sm">
            <AnchorLink to="research" label="Experiences" />
            {/*<AnchorLink to="publications" label="Publications" />*/}
            {/*<AnchorLink to="github" label="GitHub" />*/}
            <AnchorLink to="activities" label="Activities & Conference" />
            <AnchorLink to="honors" label="Awards" />
          </div>
        </div>
        <div style={{ height: 2, background: primary }} />
      </div>

{/* Hero */}
<header
  className="pt-14 text-white"
  style={{ background: `url(${p.background}) center/cover no-repeat` }}
>
<div className="bg-white/85 text-[#111] rounded-2xl shadow-lg p-8 backdrop-blur max-w-xl mx-auto">
  <div className="flex flex-col items-center justify-center gap-6 text-center">

    {/* 头像 */}
    <img
      src={p.avatar}
      alt={p.name}
      className="w-28 h-28 rounded-full border-4 mx-auto mb-2"
      style={{ borderColor: "white" }}
    />

    {/* 文本区 */}
<div className="flex flex-col items-center text-center">
  {/* 姓名和学校居中 */}
  <h1 className="text-3xl font-extrabold mb-1">{p.name}</h1>
  <div className="mt-1 font-medium mb-3">{p.org}</div>

  {/* 联系方式左对齐 */}
<div className="text-sm flex">
  <span className="font-bold mr-1">Email:</span>
  <span className="underline text-blue-600 whitespace-nowrap">{p.email}</span>
</div>
<div className="text-sm flex">
  <span className="font-bold mr-1">LinkedIn:</span>
  <a
    href={p.linkedin}
    target="_blank"
    rel="noreferrer"
    className="underline text-blue-600"
  >
    {p.linkedin}
  </a>
</div>

<div className="text-sm flex">
  <span className="font-bold mr-1">Self Interview:</span>
  <a
    href={p.selfinterview}
    target="_blank"
    rel="noreferrer"
    className="underline text-blue-600"
  >
    {p.selfinterview}
  </a>
</div>


</div>
  </div>
</div>

</header>


      {/* About (two columns) */}
      <main className="max-w-6xl mx-auto px-4 mt-6">
        <section className="bg-white rounded-xl shadow p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl" style={{ color: primary }}>📄</span>
            <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#222" }}>About</h3>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">{DATA.about.summary}</p>
          <div className="grid md:grid-cols-1 gap-8">
            {/*<div>*/}
            {/*  <div className="flex items-center gap-2 mb-2 font-semibold"><span>⭐</span><span>Interests</span></div>*/}
            {/*  <ul className="list-disc pl-6 space-y-1">*/}
            {/*    {DATA.about.interests.map((it: any, idx: number) => (*/}
            {/*      <li key={idx}>*/}
            {/*        <span className="font-medium">{it.title}: </span>*/}
            {/*        {it.links.map((l: any, i: number) => (*/}
            {/*          <a key={i} className="underline underline-offset-2 ml-1" style={{ color: primary }} href={l.href || "#"} target="_blank" rel="noreferrer">[{l.label}]</a>*/}
            {/*        ))}*/}
            {/*      </li>*/}
            {/*    ))}*/}
            {/*  </ul>*/}
            {/*</div>*/}
            <div>
              <div className="flex items-center gap-2 mb-2 font-semibold"><span>🎓</span><span>Education</span></div>
              <div className="space-y-3">
                {DATA.about.education.map((e: any, i: number) => (
                  <div key={i}>
                    <div className="font-semibold">{e.school}</div>
                    <div className="text-sm">• {e.degree}</div>
                    <div className="text-sm text-gray-500">{e.time}</div>
                    {e.advisor && <div className="text-sm text-gray-600">Topic: {e.advisor}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Experience */}
        <section id="research" className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl" style={{ color: primary }}>🧪</span>
            <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#222" }}>Research Experience</h3>
          </div>
          {DATA.researchExperiences.map((r: any, i: number) => (
            <div key={i} className="border rounded-lg mb-3 bg-white overflow-hidden">
              <button onClick={(e)=>{
                const next = (e.currentTarget.nextSibling as HTMLElement);
                if(next.style.display === 'none') next.style.display='block'; else next.style.display='none';
              }} className="w-full flex items-center justify-between px-4 py-3 text-left bg-gray-50 hover:bg-gray-100">
                <div>
                  <div className="font-semibold">{r.title}</div>
                  <div className="text-sm text-gray-500">{r.org} · {r.period}</div>
                </div>
                <span className="text-lg" style={{ color: primary }}>＋</span>
              </button>
              <div className="p-4">
                {/*<p className="text-gray-700 mb-3">{r.summary}</p>*/}
                <div className="flex flex-wrap gap-2">
                  {r.files.map((f: any, j: number) => (
                    <a key={j} href={f.href || "#"} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-full border text-sm" style={{ borderColor: primary, color: primary }}>{f.label}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Research Skills */}

        {/*<section id="skills" className="mt-8">*/}
        {/*  <div className="flex items-center gap-2 mb-4">*/}
        {/*    <span className="text-xl" style={{color: primary}}>🧰</span>*/}
        {/*    <h3 className="text-xl md:text-2xl font-semibold" style={{color: "#222"}}>Research Skills</h3>*/}
        {/*  </div>*/}
        {/*  <ul className="flex list-none gap-3">*/}
        {/*    {DATA.researchSkills.map((s: any, i: number) => (*/}
        {/*        <li className="bg-gray-50 p-4 rounded-lg">{s.name}</li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*</section>*/}

        <section id="skills" className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl" style={{color: primary}}>🧰</span>
            <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#222" }}>Research Skills (Click below for detail)</h3>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {DATA.researchSkills.map((s: any, i: number) => (
<div key={i} className="border rounded-lg mb-3 bg-white overflow-hidden">
  <div className="w-full px-4 py-3 bg-gray-50">
    <div className="font-medium">{s.name}</div>
  </div>
  <div className="p-4">
    <div className="flex flex-wrap gap-2">
      {s.links.map((l: any, j: number) => (
        <a
          key={j}
          href={l.href || "#"}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-full border text-sm"
          style={{ borderColor: primary, color: primary }}
        >
          {l.label}
        </a>
      ))}
    </div>
  </div>
</div>

            ))}
          </div>

        </section>

        {/* Activities */}
        <section id="activities" className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl" style={{ color: primary }}>📌</span>
            <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#222" }}>Activities & Conference</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.activities.map((a: any, i: number) => (
              <Card key={i} image={a.image} title={a.title} subtitle={a.date} href={a.href} />
            ))}
          </div>
        </section>

        {/* Projects */}
        {/*<section id="projects" className="mt-8">*/}
        {/*  <div className="flex items-center gap-2 mb-4">*/}
        {/*    <span className="text-xl" style={{ color: primary }}>📁</span>*/}
        {/*    <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#222" }}>Projects</h3>*/}
        {/*  </div>*/}
        {/*  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">*/}
        {/*    {DATA.projects.map((a: any, i: number) => (*/}
        {/*      <Card key={i} image={a.image} title={a.name} subtitle={a.desc} href={a.href} />*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Awards */}
        <section id="honors" className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl" style={{ color: primary }}>🏅</span>
            <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#222" }}>Awards & Certificates</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DATA.awards.map((w: any, i: number) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
                <img src={w.image} alt={w.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <div className="font-semibold" style={{ color: primary }}>{w.title}</div>
                  <div className="text-sm text-gray-500">{w.date}</div>
                  {w.proof && (
                    <a href={w.proof} target="_blank" rel="noreferrer" className="text-sm underline" style={{ color: primary }}>View certificate</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Anchors */}
        <div id="publications" className="mt-12" />
        <div id="services" className="mt-2" />

        <footer className="text-center text-sm text-gray-500 py-10">
          © {new Date().getFullYear()} {p.name} · Theme color <span style={{ color: primary }}>#4FC3F7</span>
        </footer>
      </main>
    </div>
  );
}
