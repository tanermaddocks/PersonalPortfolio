import { useState } from 'react';
import About from "./pages/About"
import './App.css';

export default function App() {

  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("page")

  switch (page) {

    default: {
      return <About />
    }

  }

};
