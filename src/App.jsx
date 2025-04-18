import About from "./pages/About";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css';



export default function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("page")

  switch (page) {

    case "projects": {
      return <Projects />
    }
    case "contact": {
      return <Contact />
    }
    default: {
      return <About />
    }

  }

};
