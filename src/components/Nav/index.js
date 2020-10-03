import React from "react";
import {capitalizeFirstLetter} from '../../utils/helpers';

const Nav = (props) => {
  const { pages = [], currentPage, setCurrentPage } = props;
  return (
    <header className="flex-row">
      <h1> Walker </h1>

      <nav>
        <ul className="flex-row">
          {pages.map((page) => (
            <li
              className={`mx-1 ${
                currentPage.name === page.name && `navActive`
              }`}
              key={page.name}
            >
              <span
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {capitalizeFirstLetter(page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
