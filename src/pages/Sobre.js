import { SiJavascript, SiHtml5, SiCss3, SiReact } from 'react-icons/si';
import { useEffect, useState } from "react";

const Style = {
    display: 'flex',
    gap: '30px'
}

function Sobre(){

  const [ativo, setAtivo] = useState(false); 
  const [ativo2, setAtivo2] = useState(false); 

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setAtivo(true);
    }, 100); // inicia um pouco depois

    const timer2 = setTimeout(() => {
      setAtivo2(true);
    }, 300); // um pouco mais tarde que o primeiro, se quiser efeito "escalonado"

    // Cleanup
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);



    return(
        <div>
          <section className="sobre">
            <div style={Style} className="container">
              <div className={`text-sobre ${ativo ? "ativo" : ""}`}>
                    <h2>QUEM SOU EU?</h2>
                    <p>Sou Pedro Henrique, de Petrópolis, RJ, formado em Desenvolvimento Front-End e atualmente cursando Back-End pela Danki Code, com foco em me tornar um Desenvolvedor Full Stack.</p>
                    <p>Busco minha primeira oportunidade como desenvolvedor ou freelancer, com disposição para colaborar em projetos e evoluir profissionalmente.</p>
                    <p>Tenho interesse futuro em cibersegurança e estou comprometido em aplicar boas práticas para criar interfaces funcionais, responsivas e seguras.</p>
                    <div className="habilidades">
                        <h2>Minhas Ferramentas de Trabalho</h2>
                        <div className="box-habilidades">
                            <SiHtml5 size={40} color="#e34c26" title="HTML5" />
                            <SiCss3 size={40} color="#1572B6" title="CSS3" />
                            <SiJavascript size={40} color="#f7df1e" title="JavaScript" />
                            <SiReact size={40} color="#61DBFB" title="React" />
                        </div>
                    </div>
              </div>
              
              <div className={`img-sobre ${ativo2 ? "ativo2" : ""}`}>
                <img src="/images/sobre.webp"/>
              </div>
              
            </div>
          </section>
        </div>
    );
}

export default Sobre