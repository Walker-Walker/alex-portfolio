import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import "./nav.css";

const Nav = (props) => {
  // function myFunction() {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }

  const { pages = [], currentPage, setCurrentPage } = props;
  return (
    
    <header className="flex-row"> 
  <h1>Alex Walker</h1>
      <nav className="flex-row">
        <ul>
          {pages.map((page) => (
            <li
              className={`mx-1 ${
                currentPage.name === page.name && ``
              }`}
              key={page.name}
            >
              <span className="mx-1 navActive"
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {capitalizeFirstLetter(page.name)}
              </span>
            </li>
          ))}
        </ul>
        <a href="javascript:void(0);" class="icon" onClick="myFunction()">
          {/* <i class='fa fa-bars'></i> */}
        </a>
      </nav>
    </header>
  );
};

export default Nav;
