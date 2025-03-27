export default function ContactForm() {
  return (

    <form>
      <div className="form-q name-form">
        <label htmlFor="name">Name:</label>
        <input type="text" name="user-name" id="name" autoComplete="on"></input>
      </div>
      <div className="form-q email-form">
        <label htmlFor="email">Email:</label>
        <input type="email" name="user-email" id="email" autoComplete="on"></input>
      </div>
      <div className="form-q subject-form">
        <label htmlFor="subject">Subject:</label>
        <input type="text" name="user-subject" id="subject"></input>
      </div>
      <div className="form-q reason-form">
        <label htmlFor="reason">Reason:</label>
        <textarea id="reason" rows="6"></textarea>
      </div>
      <input type="submit" value="Submit" id="sub-btn"></input>
    </form>

  )
}