import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as LucideIcons from "lucide-react";

// Safe icon imports with fallbacks
const Github = LucideIcons.Github || (() => null);
const Linkedin = LucideIcons.Linkedin || (() => null);
const Mail = LucideIcons.Mail || (() => null);
const ExternalLink = LucideIcons.ExternalLink || (() => null);
const ChevronRight = LucideIcons.ChevronRight || (() => null);
const Cpu = LucideIcons.Cpu || (() => null);
const Database = LucideIcons.Database || (() => null);
const Code2 = LucideIcons.Code2 || (() => null);
const Layers = LucideIcons.Layers || (() => null);
const ArrowUpRight = LucideIcons.ArrowUpRight || (() => null);
const BarChart2 = LucideIcons.BarChart2 || (() => null);

// ─── Theme ────────────────────────────────────────────────────────────────────
const C = {
  bg:     "#0A0E1A",
  bgAlt:  "#0D1220",
  card:   "#0F1629",
  border: "#1E2D4F",
  accent: "#4A9EFF",
  text:   "#E2E8F0",
  muted:  "#94A3B8",
};

const MONO = { fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" };
const SANS = { fontFamily: "system-ui, -apple-system, sans-serif" };

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden:  { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "4.0", label: "GPA" },
  { value: "91%", label: "Average" },
  { value: "300+", label: "ChatTFT Users" },
  { value: "40%+", label: "Win Rate Lift" },
];

const PROJECTS = [
  {
    name: "ChatTFT",
    tagline: "TFT AI Analytics Platform",
    url: "https://chattft.streamlit.app",
    status: "live",
    highlights: ["300+ users", "40%+ win rate improvement", "Riot Games API approved"],
    description:
      "Full-stack AI analytics platform integrating Llama 3.3 70B via Groq with a production RAG pipeline — pgvector, semantic chunking, IVFFlat indexing over 10K+ chunks. Laplace-smoothed statistical modeling across thousands of matches. Multi-turn memory, LLM-as-judge eval framework, prompt A/B testing across 3 variants (18% actionability improvement). Finetuning dataset generator producing 2K+ labeled examples.",
    stack: ["Python", "PostgreSQL", "Streamlit", "Supabase", "pgvector", "Groq API", "RAG", "LLM eval", "Pandas", "Plotly"],
  },
  {
    name: "Warm Wheels",
    tagline: "Embedded Hot Wheels Launcher",
    url: null,
    status: "complete",
    highlights: ["Arduino Uno Rev3", "State machine firmware", "L298N motor driver"],
    description:
      "Embedded control system for a pulley-driven Hot Wheels launcher. AutoCAD mechanical design, brushed DC motors with L298N driver, real-time LCD interface. Embedded C++ firmware implementing a real-time sequencing algorithm with state machine logic for motor control synchronization, input validation, and hardware-software integration.",
    stack: ["Embedded C++", "Arduino", "AutoCAD", "L298N", "State Machine", "LCD Interface"],
  },
];

const EXPERIENCE = [
  {
    company: "S&C Electric Company",
    role: "Assistant QA Engineer",
    period: "Jan – Apr 2026",
    location: "Toronto, ON",
    bullets: [
      "Reduced document retrieval time 60% for 1,000+ technical records by engineering automated Python data pipelines with custom validation scripts and CI/CD-style workflows.",
      "Improved inspection traceability and audit accuracy 40% by developing Python and HTML certification logging apps with unit-tested data validation modules and pytest-style process automation.",
      "Eliminated manual calibration bottlenecks across 500+ precision tools using intelligent Power Automate and GAGEpack workflows, achieving real-time compliance tracking.",
      "Ensured zero non-conformance escapes across 500+ OMNI Switchgear and Vista Motor systems by executing structured QA test plans against engineering blueprints with traceable defect logs.",
    ],
  },
  {
    company: "University of Waterloo WATBots",
    role: "Electrical Subteam Lead",
    period: "Sep 2025 – Present",
    location: "Waterloo, ON",
    bullets: [
      "Delivered a fully functioning competition combat robot within two academic terms, leading a cross-functional team of 30+ engineers across system architecture, power distribution, motor control, and failsafe integration.",
      "Delivered a competition-ready electrical system within a 3 lb weight limit, 85°C thermal threshold, and 5V/20mA ESP32 constraints — validated through load testing and current analysis.",
      "Developed embedded C++ firmware on Arduino, programmed AM32 ESCs for brushless motor control, and integrated an ESP32-based receiver for wireless command processing.",
      "Performed precision soldering and wire harnessing, collaborating across mechanical and software teams to ensure full system integration and competition compliance.",
    ],
  },
  {
    company: "Act First Safety",
    role: "Administrative Intern",
    period: "Jul – Sep 2024",
    location: "Toronto, ON",
    bullets: [
      "Improved data accuracy and retrieval speed for 2,000+ customer contracts by building Excel macro-based validation pipelines, reducing lookup errors and enabling company-wide accessibility.",
      "Resolved a multi-month administrative backlog within 8 weeks by optimizing data entry, expense reconciliation, and document compliance filing processes.",
    ],
  },
];

const SKILLS = [
  {
    category: "Languages & Frameworks",
    icon: Code2,
    items: ["Python", "C++", "Embedded C++", "JavaScript", "HTML", "CSS", "React", "Tailwind CSS", "Streamlit", "Assembly", "Verilog"],
  },
  {
    category: "Tools & Platforms",
    icon: Layers,
    items: ["Git", "JIRA", "REST APIs", "Power Automate", "Linux/Bash", "MATLAB", "GAGEpack", "pytest"],
  },
  {
    category: "Data & AI",
    icon: BarChart2,
    items: ["Pandas", "Plotly", "pgvector", "Statistical Modeling", "LLM API Integration", "Groq API", "RAG Pipelines", "PostgreSQL", "Supabase"],
  },
  {
    category: "Embedded & Hardware",
    icon: Cpu,
    items: ["Arduino", "ESP32", "STM32", "AM32 ESC", "I2C/SPI", "FreeRTOS", "Bluetooth HID", "AutoCAD", "SolidWorks"],
  },
];

const EDUCATION = [
  {
    school: "University of Waterloo",
    degree: "Bachelor of Applied Science, Electrical Engineering",
    period: "Sep 2025 – Aug 2030",
    gpa: "4.0 GPA · 91% average",
    awards: ["President's Scholarship of Distinction (2025)"],
  },
];

// ─── Reusable pieces ──────────────────────────────────────────────────────────
function Mono({ children, style = {}, as: Tag = "span" }) {
  return <Tag style={{ ...MONO, ...style }}>{children}</Tag>;
}

function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <Mono style={{ color: C.accent, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
        {label}
      </Mono>
      <h2 style={{ ...SANS, fontSize: "clamp(1.5rem, 4vw, 1.875rem)", fontWeight: 700, color: C.text, margin: 0 }}>
        {title}
      </h2>
      <div style={{ marginTop: "0.75rem", width: "2.5rem", height: "2px", background: C.accent, opacity: 0.5, borderRadius: "9999px" }} />
    </div>
  );
}

function Badge({ children, variant = "default" }) {
  const s = {
    default: { background: C.border,                      color: C.muted,   border: `1px solid ${C.border}` },
    accent:  { background: "rgba(74,158,255,0.1)",         color: C.accent,  border: "1px solid rgba(74,158,255,0.25)" },
    amber:   { background: "rgba(245,158,11,0.1)",         color: "#fbbf24", border: "1px solid rgba(245,158,11,0.25)" },
    green:   { background: "rgba(34,197,94,0.1)",          color: "#4ade80", border: "1px solid rgba(34,197,94,0.25)" },
  };
  return (
    <span style={{ ...s[variant], ...MONO, padding: "0.15rem 0.5rem", borderRadius: "0.25rem", fontSize: "0.65rem", whiteSpace: "nowrap", display: "inline-block" }}>
      {children}
    </span>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(10,14,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Mono style={{ fontSize: "0.875rem", color: C.accent, fontWeight: 600 }}>jh</Mono>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          {["Projects", "Experience", "Skills", "Education", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ ...MONO, fontSize: "0.7rem", color: C.muted, textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.1em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = C.text}
              onMouseLeave={e => e.target.style.color = C.muted}
            >{l}</a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
      style={{ display: "inline-block", width: "2px", height: "1em", background: C.accent, marginLeft: "4px", verticalAlign: "middle" }}
    />
  );
}

function HeroLink({ href, icon: Icon, label }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.a href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
      style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "0.375rem", border: `1px solid ${hov ? "rgba(74,158,255,0.4)" : C.border}`, color: hov ? C.text : C.muted, textDecoration: "none", ...MONO, fontSize: "0.8rem", transition: "color 0.2s, border-color 0.2s" }}
    >
      <Icon size={13} />{label}
    </motion.a>
  );
}

function StatCard({ value, label }) {
  return (
    <div style={{ textAlign: "center", padding: "1rem 1.5rem", borderRadius: "0.5rem", border: `1px solid ${C.border}`, background: C.card, minWidth: "90px" }}>
      <div style={{ ...MONO, fontSize: "1.5rem", fontWeight: 700, color: C.accent, lineHeight: 1 }}>{value}</div>
      <div style={{ ...MONO, fontSize: "0.65rem", color: C.muted, marginTop: "0.35rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
      {/* dot grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.018, backgroundImage: "radial-gradient(circle, #4A9EFF 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {/* line grid top-right */}
      <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", pointerEvents: "none", overflow: "hidden", opacity: 0.03 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4A9EFF" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div style={{ maxWidth: "64rem", margin: "0 auto", width: "100%", position: "relative" }}>
        <motion.div initial="hidden" animate="visible" variants={stagger} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          <motion.p variants={fadeUp} style={{ ...MONO, color: C.accent, fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
            Electrical Engineering · University of Waterloo
          </motion.p>

          <motion.h1 variants={fadeUp} style={{ ...SANS, fontSize: "clamp(3rem, 10vw, 5rem)", fontWeight: 800, color: C.text, lineHeight: 1, margin: 0, letterSpacing: "-0.02em" }}>
            Jonathan<br />Huang
          </motion.h1>

          <motion.p variants={fadeUp} style={{ ...MONO, color: C.muted, fontSize: "clamp(0.875rem, 2vw, 1rem)", maxWidth: "36rem", lineHeight: 1.7, margin: 0 }}>
            Building systems that run reliably — from production AI pipelines to competition-ready embedded firmware.
            <BlinkingCursor />
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <HeroLink href="mailto:j664huan@uwaterloo.ca" icon={Mail} label="Email" />
            <HeroLink href="https://github.com/jhuang0701" icon={Github} label="GitHub" />
            <HeroLink href="https://linkedin.com/in/jonathan-huang-uw" icon={Linkedin} label="LinkedIn" />
            <HeroLink href="https://chattft.streamlit.app" icon={ExternalLink} label="ChatTFT" />
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", paddingTop: "0.5rem" }}>
            {STATS.map((s) => <StatCard key={s.label} {...s} />)}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function ProjectCard({ p }) {
  const [hov, setHov] = useState(false);
  const statusBadge = p.status === "in progress" ? <Badge variant="amber">In Progress</Badge>
    : p.status === "complete" ? <Badge variant="green">Complete</Badge>
    : null;

  return (
    <motion.div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
      style={{ borderRadius: "0.5rem", border: `1px solid ${hov ? "rgba(74,158,255,0.35)" : C.border}`, background: C.card, padding: "1.5rem", display: "flex", flexDirection: "column", height: "100%", transition: "border-color 0.2s" }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
            <h3 style={{ ...SANS, color: C.text, fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>{p.name}</h3>
            {statusBadge}
          </div>
          <Mono style={{ color: C.accent, fontSize: "0.7rem" }}>{p.tagline}</Mono>
        </div>
        {p.url && (
          <motion.a href={p.url} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            style={{ color: C.muted, textDecoration: "none", flexShrink: 0, transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = C.accent}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}
          ><ArrowUpRight size={16} /></motion.a>
        )}
      </div>

      {/* Highlight chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "0.875rem" }}>
        {p.highlights.map((h) => <Badge key={h} variant="accent">{h}</Badge>)}
      </div>

      <p style={{ ...SANS, color: C.muted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1rem", flex: 1 }}>{p.description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "auto" }}>
        {p.stack.map((s) => <Badge key={s}>{s}</Badge>)}
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <FadeIn><SectionHeader label="01 / Work" title="Projects" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}><ProjectCard p={p} /></FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────
function TimelineItem({ item, isLast, dotColor }) {
  return (
    <FadeIn>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
          <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", background: dotColor || C.accent, marginTop: "0.4rem", boxShadow: `0 0 0 4px ${C.bg}`, flexShrink: 0 }} />
          {!isLast && <div style={{ width: "1px", flex: 1, background: C.border, marginTop: "0.25rem" }} />}
        </div>
        <div style={{ paddingBottom: isLast ? 0 : "2.5rem", flex: 1 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.5rem 0.75rem", marginBottom: "0.2rem" }}>
            <h3 style={{ ...SANS, color: C.text, fontWeight: 600, margin: 0 }}>{item.role}</h3>
            <Mono style={{ color: dotColor || C.accent, fontSize: "0.85rem" }}>{item.company}</Mono>
          </div>
          <Mono style={{ color: C.muted, fontSize: "0.7rem", display: "block", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
            {item.period} · {item.location}
          </Mono>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: "0.5rem", fontSize: "0.85rem", color: C.muted, lineHeight: 1.65 }}>
                <ChevronRight size={12} style={{ color: dotColor || C.accent, marginTop: "0.3rem", flexShrink: 0 }} />
                <span style={SANS}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 1.5rem", background: C.bgAlt }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <FadeIn><SectionHeader label="02 / Timeline" title="Experience" /></FadeIn>
        {EXPERIENCE.map((item, i) => (
          <TimelineItem key={item.company + item.role} item={item} isLast={i === EXPERIENCE.length - 1} />
        ))}
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function SkillChip({ label }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      whileHover={{ scale: 1.04 }}
      style={{ padding: "0.25rem 0.625rem", borderRadius: "0.25rem", fontSize: "0.75rem", ...MONO, background: C.bg, color: hov ? C.text : C.muted, border: `1px solid ${hov ? "rgba(74,158,255,0.45)" : C.border}`, cursor: "default", transition: "color 0.15s, border-color 0.15s", display: "inline-block" }}
    >{label}</motion.span>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <FadeIn><SectionHeader label="03 / Toolkit" title="Skills" /></FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {SKILLS.map((group, i) => {
            const Icon = group.icon;
            return (
              <FadeIn key={group.category} delay={i * 0.08}>
                <div style={{ borderRadius: "0.5rem", border: `1px solid ${C.border}`, background: C.card, padding: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                    <Icon size={14} style={{ color: C.accent }} />
                    <Mono style={{ color: C.text, fontSize: "0.8rem", fontWeight: 600 }}>{group.category}</Mono>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {group.items.map((skill) => <SkillChip key={skill} label={skill} />)}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────
function Education() {
  return (
    <section id="education" style={{ padding: "5rem 1.5rem", background: C.bgAlt }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <FadeIn><SectionHeader label="04 / Background" title="Education & Awards" /></FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {EDUCATION.map((ed, i) => (
            <FadeIn key={ed.school} delay={i * 0.1}>
              <div style={{ borderRadius: "0.5rem", border: `1px solid ${C.border}`, background: C.card, padding: "1.5rem" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <div>
                    <h3 style={{ ...SANS, color: C.text, fontWeight: 600, margin: "0 0 0.25rem" }}>{ed.school}</h3>
                    <p style={{ ...SANS, color: C.muted, fontSize: "0.85rem", margin: 0 }}>{ed.degree}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Mono style={{ color: C.accent, fontSize: "0.7rem", display: "block" }}>{ed.period}</Mono>
                    <Mono style={{ color: C.muted, fontSize: "0.7rem", display: "block", marginTop: "0.2rem" }}>{ed.gpa}</Mono>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.75rem" }}>
                  {ed.awards.map((a) => <Badge key={a} variant="accent">{a}</Badge>)}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactLink({ href, icon: Icon, label }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.a href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
      style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.25rem", borderRadius: "0.375rem", border: `1px solid ${hov ? "rgba(74,158,255,0.4)" : C.border}`, color: hov ? C.text : C.muted, textDecoration: "none", ...MONO, fontSize: "0.8rem", transition: "color 0.2s, border-color 0.2s" }}
    >
      <Icon size={14} style={{ color: C.accent }} />{label}
    </motion.a>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        <FadeIn><SectionHeader label="05 / Connect" title="Contact" /></FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ ...SANS, color: C.muted, fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "32rem", marginBottom: "2rem" }}>
            Open to internship opportunities, research collaborations, and interesting engineering problems. Best reached by email.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <ContactLink href="mailto:j664huan@uwaterloo.ca" icon={Mail} label="j664huan@uwaterloo.ca" />
            <ContactLink href="https://github.com/jhuang0701" icon={Github} label="GitHub" />
            <ContactLink href="https://linkedin.com/in/jonathan-huang-uw" icon={Linkedin} label="LinkedIn" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <Mono style={{ color: C.muted, fontSize: "0.7rem" }}>Jonathan Huang · Waterloo, ON</Mono>
        <Mono style={{ color: C.border, fontSize: "0.7rem" }}>Built with React · Framer Motion</Mono>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, overflowX: "hidden", ...SANS }}>
      <NavBar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
