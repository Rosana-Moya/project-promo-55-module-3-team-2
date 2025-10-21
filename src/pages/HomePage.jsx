import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import Form from "../components/Form";

const HomePage = () => {

    const [ name, setName ] = useState("");
    const [ slogan, setSlogan ] = useState("");
    const [ repo, setRepo ] = useState("");
    const [ demo, setDemo ] = useState("");
    const [ technologies, setTechnologies ] = useState("");
    const [ desc, setDesc ] = useState("");

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

    return (
         <>
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
            />
        </>
    )
}

export default HomePage

