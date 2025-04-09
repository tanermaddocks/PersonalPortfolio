// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactLink from "../components/ContactLink";
import ContactForm from "../components/ContactForm";
// Styles
import "./styles/Contact.css"


export default function Contact() {
  return (

    <>
      <Header />
      <main className="contact">
        <div className="link-block">
          <article className="get-in-touch">
            <h3>How to get in touch?</h3>
            <p>
              Feel free to contact me by using any of the links below,
              or by filling out my handy contact form!
            </p>
          </article>
          <article className="con-link">
            <ContactLink
              link="https://github.com/tanermaddocks"
              label="Github"
              icon="fa-brands fa-github"
            />
            <ContactLink
              link="www.linkedin.com/in/tanermaddocks"
              label="LinkedIn"
              icon="fa-brands fa-linkedin-in"
            />
          </article>
        </div>
        <div className="form-block">
          <article className="con-form">
            <ContactForm />
          </article>
        </div>
      </main>
      <Footer />
    </>

  )
}