import React, { useState } from 'react';
import certificateData from './certificate-data';
import styles from '../styles/certificate.css';

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
 <div className="container container-box mt-4 mb-4">
      <div className="container-certificate" name="certificate">

        <div className="row row-certificate">
            {/* First row with three certificates */}
            {certificateData.slice(0, 3).map((certificate, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <img
                  src={certificate.src}
                  alt={certificate.alt}
                  className={`${styles['img-fluid']} img-fluid`}
                  onClick={() => openBox(certificate.src, certificate.alt)}
                />
              </div>
            ))}
          </div>

          <div className="row row-certificate">
            {/* Second row with two certificates */}
            {certificateData.slice(3, 5).map((certificate, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <img
                  src={certificate.src}
                  alt={certificate.alt}
                  className={`${styles['img-fluid']} img-fluid`}
                  onClick={() => openBox(certificate.src, certificate.alt)}
                />
              </div>
            ))}
          </div>
          <h2 className="title mt-5 mb-3"> Certificates </h2>
          {BoxOpen && (
            <CertificateBox
              src={selectedImage.src}
              alt={selectedImage.alt}
              onClose={closeBox}
            />
          )}
        </div>
      </div>
    </>
  );
};


export default Certificates;

