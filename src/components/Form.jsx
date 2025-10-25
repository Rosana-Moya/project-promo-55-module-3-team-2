import "react";
import { useState } from "react";
import PreviewExample from '../images/ebook-example.jpg';


const Form = ({ name, updateName, slogan, updateSlogan, updateRepo, repo, updateDemo, demo, updateTechnologies, technologies, updateDesc, desc, autor, job, updateAutor, updateJob }) => {

  const [ photo, setPhoto ] = useState("");

  const handleChangePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Guardamos la imagen en base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeName = (ev) => {
        updateName (ev.target.value)}
    const handleChangeSlogan = (ev) => {
        updateSlogan (ev.target.value)}
    const handleChangeRepo = (ev) => {
        updateRepo (ev.target.value)}
    const handleChangeDemo = (ev) => {
        updateDemo (ev.target.value)}
    const handleChangeTechnologies = (ev) => {
        updateTechnologies (ev.target.value)}
     const handleChangeDesc = (ev) => {
        updateDesc (ev.target.value)}

  const handleAutor = (ev) => updateAutor(ev.target.value);
  const handleJob = (ev) => updateJob(ev.target.value);

  return (
    <div className="form-container">

       <h1>Información</h1>
         <h2>Cuéntanos sobre el proyecto</h2>
            <form className="form">
                <label htmlFor="name">Nombre del proyecto</label>
                <input name="name" id="name" placeholder="Nombre del proyecto" value={name} onChange={handleChangeName}/>
                <label htmlFor="slogan">Slogan del proyecto</label>
                <input name="slogan" id="slogan" placeholder="Slogan del proyecto" value={slogan} onChange={handleChangeSlogan}/>
                <label htmlFor="repo">Repo</label>
                <input name="repo" id="repo" placeholder="Repo" value={repo} onChange={handleChangeRepo}/>
                <label htmlFor="demo">Demo</label>
                <input name="demo" id="demo" placeholder="Demo" value={demo} onChange={handleChangeDemo}/>
                <label htmlFor="technologies">Tecnologías</label>
                <input name="technologies" id="technologies" placeholder="Tecnologías" value={technologies} onChange={handleChangeTechnologies}/>
                <label htmlFor="desc">Descripción</label>
                <input name="desc" id="desc" placeholder="Descripción" value={desc} onChange={handleChangeDesc}/>
            
          <h2>Cuéntanos sobre la autora</h2>

        <label htmlFor="autor">Nombre de la autora</label>
        <input
          type="text"
          id="autor"
          name="autor"
          value={autor}
          onChange={handleAutor}
          placeholder="Nombre"
        />

        <label htmlFor="job">Trabajo de la autora</label>
        <input
          type="text"
          id="job"
          name="job"
          value={job}
          onChange={handleJob}
          placeholder="Trabajo"
        />

        <div className="button-group">
          <label htmlFor="desc">Subir foto del proyecto</label>
          <input type="file" name="photo" id="photo" placeholder="Subir foto del proyecto" onChange={handleChangePhoto} accept="image/*"/>
          
          {photo ? (
  <img
    src={photo}
    alt="Previsualización del proyecto"
  />
) : (
  <img className="preview-image" src={PreviewExample} alt="Imagen de ejemplo del proyecto" />
)}
          
          <button type="button">Subir foto de la autora</button>
          <button type="button">Crear proyecto</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

    
 


