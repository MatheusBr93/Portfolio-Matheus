import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects, socialLinks } from "../data";
import ContactForm from "../components/ContactForm";
import { scrollToId } from "../utils/scrollToId";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava } from "react-icons/fa";
import { SiVite, SiMysql } from "react-icons/si";
import { MdApi } from "react-icons/md";


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="hero container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Olá, eu sou</p>
          <h1 className="hero__title">Matheus Rodrigues</h1>
          <p className="hero__subtitle">
            Full Stack Developer • React • Java • Spring • SQL
          </p>
          <div className="hero__cta">
            <button
          className="btn btn--primary"
          onClick={() => scrollToId("projects")}
        >
          Ver Projetos
        </button>
            <a className="btn" href={socialLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </motion.div>
      </section>
      

      {/* PROJETOS */}
      <section id="projects" className="section container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projetos
        </motion.h2>

        <div className="grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="card__header">
                <div className="dot red" />
                <div className="dot yellow" />
                <div className="dot green" />
              </div>

              <div className="card__body">
                <h3 className="card__title">{p.name}</h3>
                <p className="card__desc">{p.description}</p>

                <div className="tags">
                  {p.tags?.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="card__actions">
                  <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                    Abrir
                  </a>
                  <Link className="btn btn--ghost" to={`/project/${p.slug}`}>
                    Detalhes
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className="section section--alt container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Sobre mim
        </motion.h2>
        <motion.p
          className="lead"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Sou um desenvolvedor Full Stack com foco em criar aplicações modernas e completas, unindo back-end e front-end de forma eficiente.
No back-end, utilizo <strong>Java</strong> e <strong>Spring Boot</strong> para desenvolver APIs REST seguras, performáticas e bem estruturadas, com integração a bancos de dados <strong>SQL</strong>.
No front-end, construo interfaces interativas e responsivas com <strong>React</strong> e <strong>JavaScript</strong>, sempre priorizando a experiência do usuário e boas práticas de desenvolvimento.
        </motion.p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section container">
  <motion.h2
    className="section__title"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Skills
  </motion.h2>
  <div className="skills">
    <span className="chip"><FaReact color="#61DBFB" /> React</span>
    <span className="chip"><FaJs color="#F7E018" /> JavaScript</span>
    <span className="chip"><SiVite color="#646CFF" /> Vite</span>
    <span className="chip"><FaHtml5 color="#E34F26" /> HTML</span>
    <span className="chip"><FaCss3Alt color="#1572B6" /> CSS</span>
    <span className="chip"><FaGitAlt color="#F05033" /> Git</span>
    <span className="chip"><MdApi color="#4CAF50" /> API REST</span>
    <span className="chip"><SiMysql color="#00618A" /> SQL</span>
    <span className="chip"><FaJava color="#f89820" /> Java</span>
  </div>
</section>

      {/* CONTATO */}
      <section id="contact" className="section section--alt container">
        <motion.h2
          className="section__title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contato
        </motion.h2>
        <ContactForm />
      </section>
    </>
  );
}
