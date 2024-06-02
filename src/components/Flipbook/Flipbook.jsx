import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { PageFlip } from 'react-pageflip';

function Flipbook({ pdfUrl }) {
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flipbook">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode="svg"
      >
        <PageFlip>
          {Array.from(new Array(numPages), (el, index) => (
            <div key={index}>
              <Page pageNumber={index + 1} width={400} />
            </div>
          ))}
        </PageFlip>
      </Document>
    </div>
  );
}

export default Flipbook;
