import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { use, useEffect, useState } from 'react';


function Projetos(){

    const Style = {
        display:'flex',
        gap: '40px',
        flexWrap: 'wrap'
    }

    const imgProjeto1 = {
        backgroundImage: 'url(/images/projeto1.png)',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px'
        
    }

       const imgProjeto2 = {
        backgroundImage: 'url(/images/projeto2.png)',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px'
        
    }
    
        const imgProjeto3 = {
        backgroundImage: 'url(/images/projeto3.png)',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px'
    }

    const [animation,setAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(()=>{
            setAnimation(true);

        },100);

        return () => clearTimeout(timer);
    },[]);

    return(
        <div>
            <section className="projetos">
                <div className="overlay"></div>
                    <div className={`projetos-content ${animation ? "animation" : ""}`}>
                        <h2>MEUS PROJETOS</h2>
                        <p>Aqui estão alguns dos meus projetos mais recentes</p>
                        <div style={Style} className="container">
                        <div className="projeto-single">
                            <div style={imgProjeto1} className="img-projeto">

                            </div>


                            <div className="desc-projeto">
                                <span>Landing Page</span>
                                <div className="infos">
                                    <div className="infos-icon">
                                        <a href="https://github.com/DevPedroHenrique25/Landing-Page-Agencia" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                                    </div>

                                    <div className="infos-icon">
                                        <a href="https://devpedrohenrique25.github.io/Landing-Page-Agencia/" target="_blank" rel="noopener noreferrer" className="infos-icon">
                                            <FontAwesomeIcon icon={faEye} size="2x"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="projeto-single">
                            <div style={imgProjeto2} className="img-projeto">

                            </div>


                            <div className="desc-projeto">
                                <span>Venda de Carros</span>
                                <div className="infos">
                                    <div className="infos-icon">
                                        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                                    </div>

                                    <div className="infos-icon">
                                        <a href="https://exemplo.com" target="_blank" rel="noopener noreferrer" className="infos-icon">
                                            <FontAwesomeIcon icon={faEye} size="2x"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="projeto-single">
                            <div style={imgProjeto3} className="img-projeto">

                            </div>


                            <div className="desc-projeto">
                                <span>Marketing Site</span>
                                <div className="infos">
                                    <div className="infos-icon">
                                        <a href="https://github.com/DevPedroHenrique25/Empresa-Marketing-Site" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                                    </div>

                                    <div className="infos-icon">
                                        <a href="https://devpedrohenrique25.github.io/Empresa-Marketing-Site/" target="_blank" rel="noopener noreferrer" className="infos-icon">
                                            <FontAwesomeIcon icon={faEye} size="2x"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projetos;