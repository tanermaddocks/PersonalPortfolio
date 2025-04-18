import "./styles/Footer.css";

export default function Footer() {
  return (

    <footer>
      {/* All elements of footer remain consistent on all pages */}
      <div className="footer-links">
        <a href="https://linkedin.com/in/tanermaddocks" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/tanermaddocks" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="footer-info">
        <p>Author: Taner Maddocks</p>
        <p>Last updated: April 2025</p>
      </div>
    </footer>

  );
};