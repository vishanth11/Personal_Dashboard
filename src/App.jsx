import { useEffect, useState } from "react";
import "./styles.css";

const projects = [
  {
    num: "01 — FLAGSHIP / COMPUTER VISION",
    title: "Semiconductor Image Restoration",
    text: "AI-based restoration of degraded grayscale semiconductor inspection images using 2× super-resolution and NAFNet-SR.",
    tags: ["PyTorch", "NAFNet-SR", "Super Resolution", "PSNR", "SSIM", "Edge-F1"],
    url: "https://github.com/vishanth11/Semiconductor-Image-Restoration",
    featured: true,
  },
  {
    num: "02 — INTELLIGENT TRANSPORTATION",
    title: "AI Traffic Adaption",
    text: "Applied AI project focused on traffic intelligence and predictive modeling. Explore the repository for implementation details.",
    tags: ["AI / ML", "Predictive Modeling", "Traffic Intelligence"],
    url: "https://github.com/vishanth11/AI-TRAFFIC-ADAPTION",
  },
  {
    num: "03 — NLP / AI DETECTION",
    title: "Fake Academic Paper Detector",
    text: "NLP system for distinguishing human-written scientific text from AI-generated academic text using TF-IDF and handcrafted linguistic signals.",
    tags: ["TF-IDF", "Scikit-learn", "Flask", "Gradio"],
    url: "https://github.com/vishanth11/fake_paper_detector_v3",
  },
  {
    num: "04 — PREDICTIVE ANALYTICS",
    title: "Student Health Risk Prediction",
    text: "Multiclass predictive-analytics pipeline using cross-validation, class weighting, feature interactions, and ensemble learning.",
    tags: ["XGBoost", "LightGBM", "CatBoost", "5-Fold CV"],
    url: "https://github.com/vishanth11/Health-rish-prediction",
  },
  {
    num: "05 — NETWORKING / SYSTEMS",
    title: "Adaptive Data Transmission Evaluation",
    text: "Performance evaluation project using NS2 simulation and Wireshark-based network analysis.",
    tags: ["NS2", "Wireshark", "Networking"],
    url: "https://github.com/vishanth11/Performance-Evaluation-of-Adaptive-Data-Transmission-Using-NS2-Simulation-and-Wireshark-",
  },
  {
    num: "06 — MORE WORK",
    title: "PaperGuard 2.0 & Other Builds",
    text: "Additional academic, engineering, cloud, and innovation projects are available across my GitHub profile.",
    tags: ["PaperGuard 2.0", "AcadShield", "COLLATXSMART", "AWS"],
    url: "https://github.com/vishanth11",
  },
];

const skills = [
  ["AI", "AI & ML", "Predictive and intelligent systems with modern machine-learning workflows.", ["ML", "Deep Learning", "NLP", "Ensembles"]],
  ["CV", "Computer Vision", "Image restoration, super-resolution, visual intelligence, and evaluation.", ["PyTorch", "OpenCV", "NAFNet", "CNN"]],
  ["</>", "Development", "Turning models and ideas into usable end-to-end applications.", ["Python", "React", "Node.js", "Flask"]],
  ["☁", "Infrastructure", "Experimentation, deployment workflows, version control, and compute environments.", ["Git", "Docker", "AWS", "CUDA"]],
];

const services = [
  ["01", "AI & Machine Learning", "Predictive models, classification pipelines, feature engineering, ensemble learning, and evaluation."],
  ["02", "Computer Vision", "Restoration, super-resolution, visual analysis, and deep-learning systems for inspection problems."],
  ["03", "Intelligent Systems", "AI systems aimed at transportation, infrastructure, energy, and real-world decisions."],
  ["04", "Full-Stack AI", "Connecting machine-learning capabilities with web interfaces and practical workflows."],
];

function Tag({ children }) {
  return <span className="chip">{children}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <nav>
          <a className="logo" href="#home" onClick={close}>VISHANTH<span className="gold">.</span></a>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? "×" : "☰"}
          </button>
          <ul className={`navlinks ${open ? "open" : ""}`}>
            {["HOME", "ABOUT", "SKILLS", "PROJECTS", "RESEARCH", "ACHIEVEMENTS", "CONTACT"].map(item => (
              <li key={item}><a href={`#${item.toLowerCase()}`} onClick={close}>{item}</a></li>
            ))}
          </ul>
          <a className="btn-nav" href="#contact">GET IN TOUCH</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Hello!</div>
          <h1>I'm <span className="gold">Vishanth K</span></h1>
          <div className="hero-role">AI/ML Engineer &amp;<br />Research-Oriented Developer</div>
          <p className="hero-desc">I build intelligent systems across Artificial Intelligence, Machine Learning, Computer Vision, Deep Learning, and full-stack development.</p>
          <p className="hero-desc sub">Focused on turning research ideas into practical, scalable, and real-world AI solutions.</p>
          <div className="hero-tag">
            <Tag>AI / ML</Tag><Tag>Computer Vision</Tag><Tag>Research</Tag><Tag>Full-Stack</Tag>
          </div>
          <div className="btns">
            <a className="btn btn-primary" href="#projects">VIEW MY WORK →</a>
            <a className="btn btn-outline" href="/assets/Vishanth-K-Resume.pdf" download="Vishanth-K-Resume.pdf">DOWNLOAD CV ↓</a>
          </div>
        </div>
        <div className="hero-photo">
          <div className="photo-halo" />
          <div className="dot-grid" />
          <div className="photo-accent-dot" />
          <div className="hero-scribble"><span>Build</span><span>Learn</span><span>Improve</span><span>Repeat</span></div>
          <img src="/assets/vishanth-cutout.webp" alt="Vishanth K" />
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, children, description }) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <SectionHead eyebrow="About Me">Building with <span className="gold">Intelligence.</span><br />Engineering with Purpose.</SectionHead>
        <div className="about-copy">
          <p>I am pursuing a Five-Year Integrated M.Sc. in Artificial Intelligence and Machine Learning at Coimbatore Institute of Technology. My work spans machine learning, deep learning, computer vision, natural language processing, predictive analytics, intelligent systems, and full-stack development.</p>
          <p>I enjoy working on technically challenging problems where research, engineering, experimentation, and real-world impact intersect.</p>
          <div className="facts">
            <div className="fact"><small>Education</small><strong>Integrated M.Sc. — AI &amp; ML</strong></div>
            <div className="fact"><small>Institution</small><strong>Coimbatore Institute of Technology</strong></div>
            <div className="fact"><small>Focus</small><strong>AI • Research • Engineering</strong></div>
            <div className="fact"><small>Base</small><strong>Coimbatore, Tamil Nadu, India</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHead eyebrow="Technical Expertise">Tools I <span className="gold">Build With.</span></SectionHead>
        <div className="skills-grid">
          {skills.map(([icon, title, text, tags]) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon">{icon}</div><h3>{title}</h3><p>{text}</p>
              <div className="chips">{tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services">
      <div className="container">
        <SectionHead eyebrow="What I Build">From <span className="gold">Research</span> to Reality.</SectionHead>
        <div className="services-grid">
          {services.map(([num, title, text]) => (
            <article className="service" key={title}>
              <div className="skill-icon">{num}</div><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  return (
    <div className="project-side">
      <div className="pipeline">
        {["DEGRADED INSPECTION IMAGE", "NORMALIZATION", "NAFNET-SR", "2× SUPER RESOLUTION", "PSNR • SSIM • MAE • EDGE-F1"].map((x, i, arr) => (
          <div key={x} className="pipeline-step">
            <div className="pipe">{x}</div>{i < arr.length - 1 && <div className="arrow">↓</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project ${project.featured ? "featured" : ""}`}>
      <div>
        <div className="num">{project.num}</div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <div className="project-meta">{project.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
        <div className="project-links">
          <a className="gold" href={project.url} target="_blank" rel="noreferrer">VIEW GITHUB ↗</a>
        </div>
      </div>
      {project.featured && <Pipeline />}
    </article>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHead eyebrow="Selected Projects" description="A selection of technically significant work from my GitHub portfolio.">
          Research, Engineering <span className="gold">&amp; Impact.</span>
        </SectionHead>
        <div className="projects-grid">{projects.map(p => <ProjectCard key={p.title} project={p} />)}</div>
      </div>
    </section>
  );
}

function Research() {
  const cards = [
    ["CV", "Computer Vision", "Image restoration, super-resolution, defect preservation, and image-quality evaluation."],
    ["IS", "Intelligent Systems", "Predictive modeling, traffic intelligence, edge-oriented thinking, and multimodal system concepts."],
    ["NLP", "NLP & Applied ML", "AI-generated text detection, linguistic feature engineering, ensemble learning, and predictive analytics."],
  ];
  return (
    <section id="research" className="research">
      <div className="container">
        <SectionHead eyebrow="Research & Engineering">Where <span className="gold">Ideas</span> Become Systems.</SectionHead>
        <div className="research-grid">
          {cards.map(([icon, title, text]) => <article className="research-card" key={title}><div className="skill-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function Timeline({ education = false }) {
  const items = education
    ? [["COIMBATORE INSTITUTE OF TECHNOLOGY", "Five-Year Integrated M.Sc. in Artificial Intelligence and Machine Learning", "Coimbatore, Tamil Nadu, India"]]
    : [
      ["2026", "SIH Internal Hackathon Winner", "Winner at the internal Smart India Hackathon selection stage."],
      ["2026", "2nd Place — INNOVATX 2026", "Recognized in a combined hackathon and ideathon competition."],
      ["2026", "Bid to Build — Entrepreneurial Challenge Winner", "Winner of the entrepreneurial auction-style challenge."],
      ["NATIONAL LEVEL", "Top 50 Teams — Project Submission", "Selected among the top 50 teams in a national-level project submission."],
      ["2025–PRESENT", "Entrepreneurship Development Cell", "Served as Joint Secretary during 2025–2026 and currently serving as Director at Coimbatore Institute of Technology."],
    ];
  return <div className="timeline">{items.map(([year, title, text]) => <div className="timeline-item" key={title}><div className="year">{year}</div><h3>{title}</h3><p>{text}</p></div>)}</div>;
}

function Achievements() {
  return (
    <>
      <section id="achievements">
        <div className="container">
          <SectionHead eyebrow="Achievements & Leadership">Milestones Along the <span className="gold">Way.</span></SectionHead>
          <Timeline />
        </div>
      </section>
      <section className="about">
        <div className="container">
          <SectionHead eyebrow="Education">Learning the <span className="gold">Foundations.</span></SectionHead>
          <Timeline education />
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-box">
        <div>
          <div className="eyebrow">Get In Touch</div>
          <h2>Let's Build Something <span className="gold">Intelligent.</span></h2>
          <p>Interested in AI, research, engineering, or building technology with real-world impact? Let's connect.</p>
          <div className="btns">
            <a className="btn btn-primary" href="mailto:vishanthk27@gmail.com">EMAIL ME</a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/vishanth-k-385700369" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          </div>
        </div>
        <div className="contact-list">
          <div className="contact-item"><small>Email</small><a href="mailto:vishanthk27@gmail.com">vishanthk27@gmail.com</a></div>
          <div className="contact-item"><small>Phone</small><a href="tel:+919442407005">+91 9442407005</a></div>
          <div className="contact-item"><small>LinkedIn</small><a href="https://www.linkedin.com/in/vishanth-k-385700369" target="_blank" rel="noreferrer">linkedin.com/in/vishanth-k-385700369</a></div>
          <div className="contact-item"><small>GitHub</small><a href="https://github.com/vishanth11" target="_blank" rel="noreferrer">github.com/vishanth11</a></div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer><div className="container footer-inner"><p>© {new Date().getFullYear()} Vishanth K. Built with React.</p><div className="socials"><a href="https://github.com/vishanth11" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/vishanth-k-385700369" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div></footer>;
}

export default function App() {
  return <><Header /><main><Hero /><About /><Skills /><Services /><Projects /><Research /><Achievements /><Contact /></main><Footer /></>;
}
