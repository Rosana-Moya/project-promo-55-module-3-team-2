import "react";
import { useParams } from "react-router-dom";
import ls from "../services/localStorage";


const DetailPage = () => {
  const { id } = useParams();

  const initialProjects = [
    {
      name: "Proyecto 1",
      slogan: "Slogan del proyecto 1",
      repo: "Repositorio del proyecto 1",
      demo: "Demo del proyecto 1",
      technologies: "Tecnologías del proyecto 1",
      desc: "Descripción del proyecto 1",
      autor: "Autor del proyecto 1",
      job: "Puesto del autor 1",
      id: "1",
    },
    {
      name: "Proyecto 2",
      slogan: "Slogan del proyecto 2",
      repo: "Repositorio del proyecto 2",
      demo: "Demo del proyecto 2",
      technologies: "Tecnologías del proyecto 2",
      desc: "Descripción del proyecto 2",
      autor: "Autor del proyecto 2",
      job: "Puesto del autor 2",
      id: "2",
    },
  ];

  const addedProjects = ls.get("AddedProjects", []);
  const projects = [...initialProjects, ...addedProjects];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <div className="detail-page">
      <h1>{project.name}</h1>
      <h2>{project.slogan}</h2>
      <p>{project.desc}</p>
      <p>Autor: {project.autor}</p>
      <p>Puesto: {project.job}</p>
      <p>Tecnologías: {project.technologies}</p>
    </div>
  );
};

export default DetailPage;