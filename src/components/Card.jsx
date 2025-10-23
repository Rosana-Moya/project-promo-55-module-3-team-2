import "react";
import Avatar from '../images/avatar.webp';
import PreviewExample from '../images/ebook-example.jpg';
import GitHubLogo from '../images/github.svg';
import GlobeLogo from '../images/globe-solid.svg';
import Preview from "./Preview";

const Card = ({name, slogan, repo, technologies, demo, desc, autor, job}) => {

    return (
        <>
        <Preview/>
            <div className="preview-container">
                <img className="preview-image" src={PreviewExample} alt="Imagen de ejemplo del proyecto" />
            </div>
            <div className="preview-card">
                <div className="personal-info">
                    <img className="avatar" src={Avatar} alt="Imagen de ejemplo de avatar" />
                    <p>{ job ? job : 'Tu puesto o profesión' }</p>
                    <h2>{autor ? autor : 'Tu nombre'}</h2>
                </div>
                <div className="project-info">
                    <h2>{ name ? name : 'Nombre de tu proyecto'}</h2>
                    <h3>{slogan ? slogan : 'Slogan'}</h3>
                    <p>{desc ? desc : 'Descripción del proyecto'}</p>
                    <p>{repo ? repo : 'Tu Repositorio'}</p>
                    <div className="tech-info">
                        <p>{technologies ? technologies: 'Tecnologías usadas'}</p>
                        <img className="globe-logo" src={GlobeLogo} alt="icono globo" />
                        <img className="github-logo" src={GitHubLogo} alt="icono GitHub" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;