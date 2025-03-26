import "./styles/Header.css";

export default function Header() {
  return (

    <header>
      <section className="title-block">
        {/* Title and subtitle, will remain constant on all pages */}
        <div className="title-text">
          <h1>Taner Maddocks</h1>
          <h3>Professional Portfolio</h3>
        </div>
      </section>
      {/* Nav panel, links to other pages */}
      <nav>
        {/* Icon that links to index.html, AKA home and about page */}
        <a href="#" className="about-link">
          <div className="link-frame">
            <div className="link-icon">
              <i className="fa-solid fa-user"></i>
            </div>
          </div>
          <label>About</label>
        </a>
        {/* Icon that links to projects.html, the projects page */}
        <a href="/pages/projects.html" className="projects-link">
          <div className="link-frame">
            <div className="link-icon">
              <i className="fa-solid fa-code"></i>
            </div>
          </div>
          <label>Projects</label>
        </a>
        {/*Icon that links to contact.html, the contact page*/}
        <a href="/pages/contact.html" className="contact-link">
          <div className="link-frame">
            <div className="link-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
          </div>
          <label>Contact</label>
        </a>
      </nav>
    </header>

  );
};