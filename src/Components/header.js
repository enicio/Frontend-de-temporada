import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import fotoUser from '../images/foto_trybe_Jessandro.jpg'
import './header.scss';

function Header(props) {
const [ classhtml, setClasshtml ] = useState({
  calendario: "",
  clientes: "",
  orcamentos: "",
  propiedades: "",
  controle: "",
  }
);

useEffect(() => {
  const location = window.location.pathname;
  const objectkey = location.slice(1)
  setClasshtml({[objectkey] : "selected" })
},[])

  return(
    <>
      <header className="header">
        <img className="logo" src={ logo } alt="Logotipo"  />
        <ul className="options">
        <Link to="/calendario">
          <li id="calendario"
             className={classhtml.calendario} >
              Calendário
          </li>
          </Link>
          <Link to="/clientes">
          <li id="clientes"
             className={classhtml.clientes} >
              Clientes
          </li>
          </Link>
          <Link to="/orcamentos">
          <li id="orcamentos"
             className={classhtml.orcamentos} >
              Orçamentos
          </li>
          </Link>
          <Link to="/propriedades">
          <li id="propriedades"
             className={classhtml.propriedades}>
             Propriedades
          </li>
          </Link>
          <Link to="/controle">
          <li id="controle"
            className={classhtml.controle} >
              Controle
          </li>
          </Link>
        </ul>
        <span className="user">
          <img src={ fotoUser } alt="user" />
        </span>
      </header>
    </>
  );
}

export default Header;
