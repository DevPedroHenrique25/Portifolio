import React from "react";
import { useLocation,Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';


function abrirMenuMobile(){
   const menuMobile = document.querySelector('#menuMobile');
   menuMobile.classList.toggle('abrir');
}

function Navbar(){
    const location = useLocation();

    const style = {
        color: 'white',
        display: 'flex',
        gap: '60px'
    };

const style2 = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',   
  gap: '60px',
  alignItems: 'center',    
  justifyContent: 'center',  
};

    const headerStyle = {
        backgroundColor: (location.pathname === '/' || location.pathname === '/projetos' || location.pathname === '/sobre')  ? 'rgba(0, 0, 0, 1.0 )' : 'transparent',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 999
    }

    const linkStyle = (path) =>({
        color: location.pathname === path ? '#0affa9' : 'white',
        textDecoration:'none',
    });


    return(
        <header style={headerStyle}>
            <div className="container">
                <nav className="desktop" style={style}>
                    <Link to="/" style={linkStyle('/')}>HOME</Link>
                    <Link to="/sobre" style={linkStyle('/sobre')}>SOBRE</Link>
                    <Link to="/projetos" style={linkStyle('/projetos')}>PROJETOS</Link>
                    <Link to="/contato" style={linkStyle('/contato')}>CONTATO</Link>
                </nav>

                <div onClick={() => abrirMenuMobile()} className="btn-mobile">
                     <FontAwesomeIcon icon={faBars} />
                </div>

                <nav id="menuMobile" className="mobile" style={style2}>
                    <Link to="/" style={linkStyle('/')}>HOME</Link>
                    <Link to="/sobre" style={linkStyle('/sobre')}>SOBRE</Link>
                    <Link to="/projetos" style={linkStyle('/projetos')}>PROJETOS</Link>
                    <Link to="/contato" style={linkStyle('/contato')}>CONTATO</Link>
                </nav>
                
                    <div className="clear"></div>
            </div> {/*container*/}
          
        </header>
    )
}

export default Navbar;