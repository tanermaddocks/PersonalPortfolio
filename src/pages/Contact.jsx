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
              Feel free to contact me via linkedIn,
              or by filling out my contact form.
              I'm always open to new projects and opportunites!
            </p>
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