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

