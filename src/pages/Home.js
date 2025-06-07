import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="home-container">
      <video autoPlay muted loop className="video-background">
        <source src="/video/bannerHome.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
        <div className="container">
          <div id="home" className={`home-content ${active ? "active" : ""}`}>
            <h1>PEDRO</h1>
            <h2>HENRIQUE</h2>
            <p>Desenvolvedor Front-End | Estudante de Desenvolvimento Web Full-Stack</p>
            <span>dev.pedrohenrique.contato@gmail.com</span>
            <div className="social-media">
              <a href="https://github.com/DevPedroHenrique25" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
              </a>

              <a href="https://www.linkedin.com/in/pedro-henrique-39148b2a1/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
              </a>

              <a href="https://www.instagram.com/p3dro.h3nr1q?igsh=MXJnMGM4eDBrb3pyYw==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
              </a>
            </div>
            
            <div className="social-mobile">
               <a href="https://github.com/DevPedroHenrique25" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
              </a>

              <a href="https://www.linkedin.com/in/pedro-henrique-39148b2a1/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
              </a>

              <a href="https://www.instagram.com/p3dro.h3nr1q?igsh=MXJnMGM4eDBrb3pyYw==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;