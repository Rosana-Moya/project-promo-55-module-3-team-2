import "react";
import Card from "../components/Card";


const ListPage = () => {
const projects =[
    {
        name: "Proyecto 1",
        slogan: "Slogan del proyecto 1",
        repo: "Repositorio del proyecto 1",
        demo : "Demo del proyecto 1",
        technologies: "Tecnologías del proyecto 1",
        desc: "Descripción del proyecto 1",
        autor: "Autor del proyecto 1",
        job: "Puesto del autor 1",
    },
    {
        name: "Proyecto 2",
        slogan: "Slogan del proyecto 2",
        repo: "Repositorio del proyecto 2",
        demo : "Demo del proyecto 2",
        technologies: "Tecnologías del proyecto 2",
        desc: "Descripción del proyecto 2",
        autor: "Autor del proyecto 2",
        job: "Puesto del autor 2",
    },
];  
     return (
        <>
        <ul> {projects.map (project => {
            return (
               <Card
            
        name={project.name}
        slogan={project.slogan}
        repo={project.repo}
        technologies={project.technologies}
        demo={project.demo}
        desc={project.desc}
        autor={project.autor}
        job={project.job}
        
               
               />
            )
        })}</ul> 
        </>
    
    );

};


export default ListPage;