import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
require('dotenv').config()
// import logo from './logo.svg';

function App() {
  const [pages] = useState([
    {
      name: "about me",
      page: <About />
    },
    {
      name: "portfolio",
      page: <Portfolio />
    },
    {
      name: "contact",
      page: <Contact />
    },
    {
      name: "resume",
      page: <Resume />
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // function displayPage() {
  //   switch (currentPage.name) {
  //     case "about me":
  //       return <About />;

  //     case "portfolio":
  //       return <Portfolio />;

  //     case 'resume':
  //     return <Resume/>;

  //     case 'contact':
  //     return <Contact/>;

  //     default: // defensive programming used to redirect user if information is missing or whatever scenario
  //       return <About />;
  //   }
  // }

  return (
    <div>
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {currentPage.page}
      </main>
      <Footer />

    </div>
  );
}

export default App;
