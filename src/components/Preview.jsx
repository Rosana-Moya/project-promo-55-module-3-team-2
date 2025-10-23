import  "react";

const Preview = () => {
    const file = event.target.files[0]; // Obtén el primer archivo seleccionado
  if (file) {
    const reader = new FileReader();
     reader.onload = function(e) {
      localStorage.setItem("photoUp", JSON.stringify(e.target.result));
      photoUp.innerHTML = `<img src=${e.target.result} alt="Imagen del usuario/a" class="photo-up__image">`
    };
    return (
        <><h1></h1></>
    );
}
};

export default Preview;