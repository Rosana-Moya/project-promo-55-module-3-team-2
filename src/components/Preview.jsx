import  "react";
import PreviewExample from '../images/ebook-example.jpg';
import Card from '../components/Card';


const Preview = ({name, slogan, repo, technologies, demo, desc, autor, job, photo}) => {
  
    return (
      <>
      {photo ? (
  <img
    src={photo}
    alt="Previsualización del proyecto"
  />
) : (
  <img className="preview-image" src={PreviewExample} alt="Imagen de ejemplo del proyecto" />
)}
        <Card
        name={name}
        slogan={slogan}
        repo={repo}
        technologies={technologies}
        demo={demo}
        desc={desc}
        autor={autor}
        job={job}
        />
        </>
    );
};

export default Preview;