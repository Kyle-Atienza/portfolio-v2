import axios from "axios";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  axios.defaults.baseURL = `${process.env.REACT_APP_AXIOS_BASE_URL}`;

  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("/experiences").then((res) => setExperiences(res.data));
    axios.get("/projects").then((res) => setProjects(res.data));
  }, []);

  useEffect(() => {
    console.log(experiences, projects);
  }, [experiences, projects]);

  return (
    <div>
      <Header />
      <Experiences experiences={experiences} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
