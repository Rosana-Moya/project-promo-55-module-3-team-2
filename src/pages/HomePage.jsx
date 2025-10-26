import "react";
import Card from '../components/Card';
import Footer from '../components/Footer';
import '../styles/HomePage.css';
import Form from "../components/Form";
import { useState } from "react"
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Preview from "../components/Preview";
import ls from '../services/localStorage';



const HomePage = () => {
     const [ name, setName ] = useState(ls.get("name") || "");
    const [ slogan, setSlogan ] = useState(ls.get ("slogan") || "");
    const [ repo, setRepo ] = useState(ls.get("repo") || "");
    const [ demo, setDemo ] = useState(ls.get("demo") || "");
    const [ technologies, setTechnologies ] = useState(ls.get("technologies") || []);
    const [ desc, setDesc ] = useState(ls.get("desc") || "");
    const [autor, setAutor] = useState(ls.get("autor") || "");
    const [job, setJob] = useState(ls.get("setJob") || "");
    const [ photo, setPhoto ] = useState(ls.get("photo") || "");



   const updateName = (value) => {
        setName (value)}
    const updateSlogan = (value) => {
        setSlogan (value)}
    const updateRepo = (value) => {
        setRepo (value)}
    const updateTechnologies = (value) => {
        setTechnologies (value)}
    const updateDemo = (value) => {
        setDemo (value)}
    const updateDesc = (value) => {
        setDesc (value)}
    const updatePhoto = (value) => {
        setPhoto (value)}

  const updateAutor = (value) => setAutor(value);
  const updateJob = (value) => setJob(value);

  return (
    <div className="homepage">
         <Header />
      <Form
       updateName={updateName}
                name={name}
                updateSlogan={updateSlogan}
                slogan={slogan}
                updateRepo={updateRepo}
                repo={repo}
                updateTechnologies={updateTechnologies}
                technologies={technologies}
                updateDemo={updateDemo}
                demo={demo}
                updateDesc={updateDesc}
                desc={desc}
        autor={autor}
        job={job}
        updateAutor={updateAutor}
        updateJob={updateJob}
        updatePhoto={updatePhoto}
      />
           
            <Preview
            name={name}
            slogan={slogan}
            repo={repo}
            technologies={technologies}
            demo={demo}
            desc={desc}
            autor={autor}
            job={job}
            photo={photo}
            />
            <Footer />
        
    </div>
  );
};

export default HomePage;




