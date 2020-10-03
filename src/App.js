import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";

// import logo from './logo.svg';

function App() {
  const [pages] = useState([
    {
      name: "about me",
    },
    {
      name: "portfolio",
    },
    {
      name: "contact",
    },
    {
      name: "resume",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
