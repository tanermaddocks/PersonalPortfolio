// Components
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard";
// Assets
import projectData from "../assets/projects-data.json"
// Styles
import "./styles/Projects.css"


export default function Projects() {

  // Project Data
  const personalPortfolio = projectData.porfolio
  const runeQuest = projectData.runequest

  return (

    <>
      <Header />
      <main className="projects">
        <div className="project-cards">
          <ProjectCard order="1" project={personalPortfolio} />
          <ProjectCard order="2" project={runeQuest} />
        </div>
      </main>
      <Footer />
    </>

  );
};