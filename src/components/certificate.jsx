import React, { useState } from 'react';
import certificateData from'./certificate-data';
import '../styles/certificate.css';

const CertificateBox = ({ src, alt, onClose }) => {
  return (
    <div className="box-overlay" onClick={onClose}>
      <div className="box-container">
        <img src={src} alt={alt} className="box-img" />
      </div>
    </div>
  );
};

const Certificates = () => {
  const [BoxOpen, setBoxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openBox = (src, alt) => {
    setSelectedImage({ src, alt });
    setBoxOpen(true);
  };

  const closeBox = () => {
    setBoxOpen(false);
  };
 
  return (
    <>
    
    <div className="container-certificate mt-5 mb-5" name="certificate">
    <h2 className="title"> Certificates </h2>
   
      <div className="row-certificate">
   
        {certificateData.map((certificate, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <img
              src={certificate.src}
              alt={certificate.alt}
              className="img-fluid"
              onClick={() => openBox(certificate.src, certificate.alt)}
            />
          </div>
        ))}
      </div>

      {BoxOpen && (
        <CertificateBox
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={closeBox}
        />
      )}
    </div>
    </>
  );
};


export default Certificates;
