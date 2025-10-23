import "react";
import Avatar from '../images/avatar.webp';
import PreviewExample from '../images/ebook-example.jpg';
import GitHubLogo from '../images/github.svg';
import GlobeLogo from '../images/globe-solid.svg';

const Preview = ({name, }) => {
    return (
        <>
            <div className="preview-container">
                <img className="preview-image" src={PreviewExample} alt="Imagen de ejemplo del proyecto" />
            </div>
            <div className="preview-card">
                <div className="personal-info">
                    <img className="avatar" src={Avatar} alt="Imagen de ejemplo de avatar" />
                    <p>{name.value}Tu puesto o profesión</p>
                    <h2>Tu nombre</h2>
                </div>
                <div className="project-info">
                    <h2>Nombre de tu proyecto</h2>
                    <h3>Slogan</h3>
                    <p>Descripción del proyecto</p>
                    <div className="tech-info">
                        <p>Tecnologías usadas</p>
                        <img className="globe-logo" src={GlobeLogo} alt="icono globo" />
                        <img className="github-logo" src={GitHubLogo} alt="icono GitHub" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preview;