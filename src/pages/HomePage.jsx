import React, { useState } from "react";
import Form from "../components/Form";

const HomePage = () => {
  const [autor, setAutor] = useState("");
  const [job, setJob] = useState("");

  const handleAutor = (ev) => setAutor(ev.target.value);
  const handleJob = (ev) => setJob(ev.target.value);

  return (
    <div className="homepage">
      <Form
        autor={autor}
        job={job}
        handleAutor={handleAutor}
        handleJob={handleJob}
      />
    </div>
  );
};

export default HomePage;



