export default function ProjectCard({ order, project }) {

  const projectLink = project.link
  const projectName = project.name
  const projectDescription = project.description
  const projectStack = project.stack
  const gitLink = project.gitLink

  return (

    <article className={"project-card-" + order}>
      <div className="card-top">
        <a className="project-heading" href={projectLink} target="_blank">
          <h3>{projectName}</h3>
        </a>
        <p className="proj-desc">{projectDescription}</p>
      </div>
      <div className="card-bottom">
        <p className="proj-stck">
          <span id="stack-bold">Stack:</span>
          <span> {projectStack} </span>
        </p>
        <a className="git-link" href={gitLink} target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </article>

  )
}