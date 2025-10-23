import "react";
import Card from '../components/Card';
import Footer from '../components/Footer';
import '../styles/HomePage.css';
import Form from "../components/Form";
import { useState } from "react"
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Preview from "../components/Preview";


const HomePage = () => {
     const [ name, setName ] = useState("");
    const [ slogan, setSlogan ] = useState("");
    const [ repo, setRepo ] = useState("");
    const [ demo, setDemo ] = useState("");
    const [ technologies, setTechnologies ] = useState("");
    const [ desc, setDesc ] = useState("");
  const [autor, setAutor] = useState("");
  const [job, setJob] = useState("");

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
      />
           
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
            <Footer />
        
    </div>
  );
};

export default HomePage;




