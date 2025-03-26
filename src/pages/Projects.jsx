import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard";

import projectData from "../data/projects-data.json"

export default function Projects() {

  function renderCards(projects) {
    let orderNum = 1
    projects.forEach(project => {
      orderNum++
      if (project.name != "template") {
        <ProjectCard order={`${orderNum}`} project={project} />
      }
    });
  };

  return (

    <>
      <Header />
      <main>
        <div className="project-cards">
          {() => renderCards(projectData)}
        </div>
      </main>
      <Footer />
    </>

  );
};