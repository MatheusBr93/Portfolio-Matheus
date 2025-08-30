import { useEffect, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { Link, Outlet } from "react-router-dom";
import { scrollToId } from "../utils/scrollToId"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Ao dar refresh/montar o layout, garante que começa no topo (Hero)
    window.scrollTo(0, 0);

    const onScroll = () => {
      const header = document.querySelector(".header");
      if (!header) return;
      if (window.scrollY > 10) header.classList.add("header--scrolled");
      else header.classList.remove("header--scrolled");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site">
      <header className="header">
        <div className="container header__inner">
          <Link to="/" className="brand">&lt;Dev/Portfolio&gt;</Link>

          <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
            <button onClick={() => { scrollToId("projects"); setMenuOpen(false); }}>
              Projetos
            </button>
            <button onClick={() => { scrollToId("about"); setMenuOpen(false); }}>
              Sobre
            </button>
            <button onClick={() => { scrollToId("skills"); setMenuOpen(false); }}>
              Skills
            </button>
            <button onClick={() => { scrollToId("contact"); setMenuOpen(false); }}>
              Contato
            </button>
          </nav>

          <div className="header__actions">
            <ThemeToggle />
            <button
              className={`burger ${menuOpen ? "is-open" : ""}`}
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="footer">
  <div className="container footer__inner">
    <span>© {new Date().getFullYear()} Matheus</span>
    <nav className="social">
      <a href="https://github.com/MatheusBr93" target="_blank" rel="noreferrer">
        <FaGithub size={22} />
      </a>
      <a href="https://www.linkedin.com/in/matheus-nascimento-60a07228b/" target="_blank" rel="noreferrer">
        <FaLinkedin size={22} color="#0A66C2" />
      </a>
      <a href="mailto:matheusnascimentobr93@gmail.com" target="_blank" rel="noreferrer">
        <SiGmail size={22} color="#D14836" />
      </a>
    </nav>
  </div>
</footer>
    </div>
  );
}
