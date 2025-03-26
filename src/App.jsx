import { useState } from 'react';
import About from "./pages/About"
import Projects from './pages/Projects';
import './App.css';


export default function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("page")

  switch (page) {

    case "projects": {
      return <Projects />
    }
    default: {
      return <About />
    }

  }

};
