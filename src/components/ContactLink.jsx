export default function ContactLink({ link, label, icon }) {
  return (

    <a href={link} target="_blank">
      <i className={icon}></i>
      <span>{label}</span>
    </a>

  )
}