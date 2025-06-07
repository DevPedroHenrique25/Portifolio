import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faInstagram, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";

function Contato(){
 const [animacao,setAnimacao] = useState(false);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setAnimacao(true);
        },100)

        return () => clearTimeout(timer);
    },[]);
    
    const Style = {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap:'25px'
    }

    return(
        <div>
            <section className="contato">
                <div className="overlay-contato"></div>

                <div className={`conteudo ${animacao ?"animacao" : ""}`}>
                    <h2>ONDE ME ENCONTRAR</h2>
                    <p>Sinta-se livre para <span>falar</span> comigo</p>
                    <div style={Style} className="social-contato">
                           <a href="https://github.com/DevPedroHenrique25" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
                            </a>
                        
                            <a href="https://www.linkedin.com/in/pedro-henrique-39148b2a1/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="white" />
                            </a>
                        
                            <a href="https://www.instagram.com/p3dro.h3nr1q?igsh=MXJnMGM4eDBrb3pyYw==" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
                            </a>

                           <a href="https://wa.me/5524992129512" target="_blank" rel="noopener noreferrer">       
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
                            </a>
                    </div>
                </div>
            </section>  
        </div>
    );
}

export default Contato;