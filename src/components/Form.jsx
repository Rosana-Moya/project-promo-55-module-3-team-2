import React from "react";


const Form = ({ autor, job, handleAutor, handleJob }) => {
  return (
    <div className="form-container">
      <h2>Cuéntanos sobre la autora</h2>

      <form>
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
          <button type="button">Subir foto del proyecto</button>
          <button type="button">Subir foto de la autora</button>
          <button type="button">Crear proyecto</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
=======
const Form = ({name, updateName, slogan, updateSlogan, updateRepo, repo, updateDemo, demo, updateTechnologies, technologies, updateDesc, desc}) => {

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

    return (
         <>
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
            </form>
        </>
    )
}


