import React, { useState } from "react";

// import { Document, Page, pdfjs } from "react-pdf";
// import cv from "./_Alex Walker CV.pdf";
// import "./resume.css"

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    <section>
      <h1>Languages</h1>
      <ul>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>
      <h1>Applications</h1>
      <ul>
        <li>NodeJs</li>
        <li>Mysql2</li>
        <li>Sequelize</li>
        <li>Sqlite3</li>
        <li>Bootstrap</li>
        <li>Handlebars</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Gitbash</li>
        <li>ExpressJS</li>
        <li>React</li>
        <li>MERN</li>
        <li>GraphQL</li>
      </ul>
    </section>
    
  )
    
}

// <div>
//   {/* <Document file={cv} onLoadSuccess={onDocumentLoadSuccess} >
//     <Page pageNumber={pageNumber} />
//     <Page pageNumber={setPageNumber}/>
//   </Document>
//   <p>
//      {/* Page {pageNumber} of {numPages}  */}
//   {/* </p> */} */}
// </div>
