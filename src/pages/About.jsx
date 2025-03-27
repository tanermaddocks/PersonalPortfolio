import Header from "../components/Header"
import Footer from "../components/Footer"

import profileImage from "../assets/taner_profile.jpg"

import "./styles/About.css"

export default function About() {

  return (
    <>
      <Header />
      <main className="about">
        <article className="about-img">
          <img src={profileImage} alt="profile picture"></img>
        </article>
        <article className="about-me">
          <h3>About Me</h3>
          <p>
            My name is Taner, and I am a web development student from
            Brisbane, Queensland currently studying at Coder Academy.
            Some of my interests outside of web development include
            travelling, TTRPGs and video games.
          </p>
          <p>
            I am currently learning about HTML and CSS and will soon be
            diving into javascript. Coding and web development are skills
            I hope to build an exciting new career with.
          </p>
        </article>
        <article className="about-skills">
          <div className="languages">
            <h3>Languages</h3>
            <p>In progress</p>
          </div>
          <div className="databases">
            <h3>Databases</h3>
            <p>In progress</p>
          </div>
          <div className="frontend">
            <h3>Frontend</h3>
            <p>HTML, CSS</p>
          </div>
          <div className="otherskills">
            <h3>Other Skills</h3>
            <p>Git</p>
          </div>
          <div className="backend">
            <h3>Backend</h3>
            <p>In progress</p>
          </div>
          <div className="education">
            <h3>Education</h3>
            <p>In progress</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )

}