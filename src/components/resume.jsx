import React from 'react';
import '../styles/resume.css';

const Resume = () => {
  const pdfUrl = 'https://drive.google.com/uc?export=download&id=1tj3ZFiywjnaf3jT474WBIZfEQmusun72'; 

  return (
    <div className="container resume-container" id="resume">
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="resume-content">
            <h2 className='title-resume'>Resume</h2>
            <p className='subtitle'>This is my updated resume:</p>
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
          
              title="Resume"
            />
            {/* Optional: Add a link to download the PDF */}
            <a href={pdfUrl} download="Moira_Corradini_Resume.pdf" className="btn btn-primary mt-2">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;