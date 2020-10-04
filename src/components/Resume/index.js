import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import cv from "./CV.pdf";
import "./resume.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={cv} onLoadSuccess={onDocumentLoadSuccess} >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        {/* Page {pageNumber} of {numPages} */}
      </p>
    </div>
  );
}
