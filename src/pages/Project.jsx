import { useParams, Link } from "react-router-dom";
import { projects } from "../data";

export default function Project() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="container section">
        <h2>Projeto não encontrado</h2>
        <Link className="btn" to="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 className="hero__title">{project.name}</h1>
      <p className="lead">{project.longDescription}</p>
      <div className="tags" style={{margin:"12px 0 20px"}}>
        {project.tags?.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>
      <div className="gallery">
        {project.images?.length ? (
          project.images.map((src, i) => (
            <img key={i} src={src} alt={`${project.name} ${i+1}`} className="shot"/>
          ))
        ) : (
          <div className="placeholder">Sem imagens</div>
        )}
      </div>
      <div className="card__actions" style={{marginTop:16}}>
        <a className="btn btn--primary" href={project.link} target="_blank" rel="noreferrer">Abrir projeto</a>
        <Link className="btn" to="/">Voltar</Link>
      </div>
    </div>
  );
}
