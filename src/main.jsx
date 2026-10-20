import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const experience = [
  ['2025 — nu', 'Center for Botilbud', 'Pædagogisk assistent', 'Pædagogisk støtte, hjælp til daglige gøremål og aktiviteter samt transport til og fra botilbud.'],
  ['2024 — 2025', 'Næsbyhus', 'Pædagogisk assistent', 'Pædagogisk støtte og hjælp til dagligdagens gøremål og aktiviteter.'],
  ['2024', 'Vurderingsstyrelsen', 'Overassistent', 'Sagsbehandling af tilbagebetalingsordningen for boligejere, vejledning på beskatningsområdet og teknisk support.'],
  ['2022 — 2023', 'Gelerts Gård', 'Pædagogisk assistent', 'Støtte og hjælp til beboere i dagligdagen.'],
  ['2022 — 2024', 'Landbrugsstyrelsen', 'Kontorfuldmægtig', 'Sagsbehandling af EU-ansøgninger, juridisk vejledning og administrative opgaver – samt støtte til implementeringen af landbrugsreformen 2024.'],
  ['2021 — 2022', 'Intrum', 'Gældsrådgiver', 'Rådgivning af virksomheder og privatpersoner med gæld samt forhandling af forlig.'],
  ['2017 — 2018', 'Roskilde Sygehus', 'Portør', 'Transport af patienter mellem afdelinger samt levering af kemo og medicin.'],
  ['2011 — 2014', 'Esvagt A/S', 'Ubefaren skibsassistent', 'Vedligeholdelse af skibet og del af redningsbesætningen.']
];

const skillGroups = [
  { label: 'Web & frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { label: 'AI & logik', items: ['Python / Pydantic', 'LangChain', 'LangGraph', 'AI-værktøjer'] },
  { label: 'Data & systemer', items: ['SQL', 'PostgreSQL', 'SAP', 'Microsoft 365'] },
  { label: 'Kontor', items: ['Office · højt niveau', 'Excel · mellem niveau', 'Digital produktudvikling'] }
];

const qualifications = ['Strategiudvikling', 'Innovative processer', 'Kommunikation & forhandling', 'Kommunikation & undervisning', 'Koordinering & overblik', 'Juridisk forståelse'];
const studySubjects = ['Webkommunikation & webudvikling', 'UX-design', 'Data Science Tools', 'AI-etik', 'AI-softwareudvikling', 'Forandringsledelse', 'AI Agents', 'Cybersecurity'];
const courses = ['Fjernledelse · Jacob Fuglsang / Edutasia / HK', 'Mødeledelse · Jacob Fuglsang / Edutasia / HK', 'SEO – optimering af hjemmesider', 'HR og rekruttering · University of Minnesota'];

function App() {
  const [language, setLanguage] = useState('da');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeJob, setActiveJob] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const copy = language === 'da' ? {
    nav: ['Om mig', 'Erfaring', 'Uddannelse', 'Kompetencer', 'Video', 'Kontakt'],
    eyebrow: 'DIGITAL PROFIL · 2026',
    title: <>Administration med <em>teknologisk</em> udsyn.</>,
    intro: 'Jeg kombinerer erfaring fra offentlig administration, HR og sagsbehandling med en cand.it-profil i webkommunikation, AI og cybersecurity.',
    aboutTitle: 'Hvem er Jonas?',
    aboutText: 'Jeg er nysgerrig, ansvarsbevidst og drevet af at forstå, hvordan mennesker, organisationer og teknologi kan spille bedre sammen. Min styrke ligger i krydsfeltet mellem det strukturerede og det nytænkende.',
    videoLabel: 'Introduktionsvideo',
    videoText: 'En personlig introduktion til mine kompetencer og min måde at arbejde på.',
    contactTitle: 'Skal vi tale sammen?'
  } : {
    nav: ['About', 'Experience', 'Education', 'Skills', 'Video', 'Contact'],
    eyebrow: 'DIGITAL PROFILE · 2026',
    title: <>Administration with a <em>technological</em> outlook.</>,
    intro: 'I combine experience from public administration, HR and casework with a cand.it profile in web communication, AI and cybersecurity.',
    aboutTitle: 'Who is Jonas?',
    aboutText: 'I am curious, responsible and driven by understanding how people, organisations and technology can work better together. My strength lies at the intersection of structure and new thinking.',
    videoLabel: 'Introduction video',
    videoText: 'A personal introduction to my skills and the way I work.',
    contactTitle: 'Let’s talk'
  };

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => goTo('home')} aria-label="Gå til forsiden">
          <span className="brand-mark">JS</span>
          <span>Jonas Søndergaard Jensen</span>
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Åbn menu">
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Hovednavigation">
          {['about', 'experience', 'education', 'skills', 'video', 'contact'].map((id, index) => (
            <button className={activeSection === id ? 'active' : ''} key={id} onClick={() => goTo(id)}>{copy.nav[index]}</button>
          ))}
          <button className="language" onClick={() => setLanguage(language === 'da' ? 'en' : 'da')}>{language === 'da' ? 'EN' : 'DA'} <span>↗</span></button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse" /> {copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="hero-intro">{copy.intro}</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => goTo('experience')}>Se min erfaring <span>↗</span></button>
              <button className="button ghost" onClick={() => goTo('contact')}>Kontakt mig</button>
            </div>
            <div className="hero-meta"><span>01</span><div /><span>Administration · HR · AI · Web</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src="/jonas-jensen.jpg" alt="Portræt af Jonas Søndergaard Jensen" /></div>
            <div className="portrait-note"><span className="note-dot" /><span>Open to meaningful work</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          </div>
        </section>

        <section id="about" className="section-pad about-grid">
          <div className="section-kicker">01 / {copy.aboutTitle}</div>
          <div className="about-content">
            <h2>{copy.aboutTitle}<br /><span>mennesket bag profilen.</span></h2>
            <p className="lead">{copy.aboutText}</p>
            <div className="trait-list">
              {['Udadvendt & positiv', 'Kreativ & nysgerrig', 'Teamorienteret', 'Problemløsende'].map((trait, i) => <span key={trait}><b>0{i + 1}</b>{trait}</span>)}
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad dark-section">
          <div className="section-heading"><div><div className="section-kicker">02 / Erfaring</div><h2>Det jeg har<br /><span>bygget erfaring på.</span></h2></div><p className="heading-note">Flere brancher.<br />Én nysgerrighed.</p></div>
          <div className="timeline-layout">
            <div className="timeline-list">
              {experience.map((job, index) => <button className={activeJob === index ? 'timeline-item selected' : 'timeline-item'} onClick={() => setActiveJob(index)} key={job[1]}><span className="timeline-year">{job[0]}</span><span className="timeline-company">{job[1]}</span><span className="timeline-role">{job[2]}</span><i>↗</i></button>)}
            </div>
            <article className="experience-detail">
              <span className="detail-number">0{activeJob + 1}</span>
              <p className="eyebrow">Udvalgt erfaring</p>
              <h3>{experience[activeJob][1]}</h3><p className="role-large">{experience[activeJob][2]}</p><p>{experience[activeJob][3]}</p>
              <div className="detail-line" /><span className="detail-caption">{experience[activeJob][0]} · professionel erfaring</span>
            </article>
          </div>
        </section>

        <section id="skills" className="section-pad">
          <div className="section-heading"><div><div className="section-kicker">03 / Kompetencer</div><h2>Fra idé til<br /><span>implementering.</span></h2></div><p className="heading-note">En profil i<br />bevægelse.</p></div>
          <div className="skill-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.label}><span className="card-index">0{index + 1}</span><h3>{group.label}</h3><div className="tag-row">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
          <div className="qualification-row"><div><span className="section-kicker">Det tager jeg med</span><h3>Kompetencer der<br /><em>gør en forskel.</em></h3></div><div className="qualification-list">{qualifications.map((q, i) => <span key={q}><b>{String(i + 1).padStart(2, '0')}</b>{q}</span>)}</div></div>
        </section>

        <section id="education" className="section-pad education-section">
          <div className="section-kicker">04 / Uddannelse</div>
          <div className="education-grid"><div><h2>Viden i<br /><span>praksis.</span></h2><p className="lead">Jeg er uddannet administrationsbachelor og er i gang med cand.it. Webkommunikation, hvor jeg bygger bro mellem organisation, teknologi og mennesker.</p></div><article className="education-card"><span className="card-index">2018 — 2021</span><h3>Administrationsbachelor</h3><p>University College Lillebælt – Erhvervsakademi og Professionshøjskole</p><div className="education-detail"><span>Speciale</span><strong>HR og ledelse</strong><span>Bachelorprojekt</span><strong>Motivation og ledelse af ansatte i fjernarbejde · karakter 10</strong></div></article></div>
          <div className="subjects"><p className="section-kicker">Cand.it. Webkommunikation · gennemførte fag</p><div className="subject-row">{studySubjects.map((subject) => <span key={subject}>{subject}</span>)}</div></div>
        </section>

        <section id="video" className="section-pad video-section">
          <div className="video-card"><div className="video-copy"><div className="section-kicker">05 / {copy.videoLabel}</div><h2>Et menneske<br /><span>bag teknologien.</span></h2><p>{copy.videoText}</p><span className="video-status">VIDEO COMING SOON <i /></span></div><div className="video-placeholder"><div className="play-button">▶</div><span>Jonas Søndergaard Jensen</span></div></div>
        </section>

        <section className="section-pad profile-section"><div className="section-kicker">06 / Min retning</div><h2 className="center-title">Administration <span>×</span> teknologi</h2><div className="path-row">{['Administration', 'HR & jura', 'Data', 'Webkommunikation', 'IT & AI'].map((item, i) => <div className="path-step" key={item}><span>0{i + 1}</span><strong>{item}</strong>{i < 4 && <b>→</b>}</div>)}</div></section>

        <section className="section-pad extras-section"><div className="extras-grid"><div><div className="section-kicker">07 / Kurser</div><h2>Det holder<br /><span>mig skarp.</span></h2><div className="course-list">{courses.map((course, i) => <div key={course}><b>0{i + 1}</b><span>{course}</span></div>)}</div></div><div><div className="section-kicker">08 / Sprog</div><h2>Kommunikation<br /><span>uden grænser.</span></h2><div className="language-list"><div><strong>Dansk</strong><span>Modersmål</span></div><div><strong>Engelsk</strong><span>Flydende – mundtligt og skriftligt</span></div><div><strong>Tysk</strong><span>Moderat – forstår og læser næsten flydende</span></div></div></div></div></section>

        <section id="contact" className="contact-section section-pad"><div className="section-kicker">09 / Kontakt</div><div className="contact-grid"><div><h2>{copy.contactTitle}<br /><em>jeg er kun et klik væk.</em></h2><a className="contact-email" href="mailto:Jonas16jensen51@gmail.com">Jonas16jensen51@gmail.com <span>↗</span></a></div><div className="contact-details"><a href="tel:+4525702953"><span>Telefon</span>+45 25 70 29 53</a><a href="https://www.linkedin.com/in/jonas-søndergaard-jensen" target="_blank" rel="noreferrer"><span>LinkedIn</span>Besøg min profil ↗</a><div><span>Interesser</span>Styrketræning · Sport · Teknologi<br />Psykologi · Filosofi</div></div></div></section>
      </main>

      <footer><div className="footer-main"><div><span className="brand-mark">JS</span><h3>Jonas Søndergaard<br />Jensen</h3></div><p>Administration, kommunikation<br />og teknologi i samme profil.</p><a href="mailto:Jonas16jensen51@gmail.com" className="footer-arrow">↗</a></div><div className="footer-bottom"><span>© 2026 Jonas Søndergaard Jensen</span><span>Built with curiosity</span><span>Odense · Denmark</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
