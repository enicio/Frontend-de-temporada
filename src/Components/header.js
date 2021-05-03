import React from 'react';
import logo from '../images/logo.png'
import fotoUser from '../images/foto_trybe_Jessandro.jpg'
import './header.scss'


function Header() {
  return(
    <>
    <header className="header">
      <img className="logo" src={ logo } alt="Logotipo"  />
      <ul className="options">
        <li>Calendário</li>
        <li>Clientes</li>
        <li>Orçamentos</li>
        <li>Propriedades</li>
        <li>Controle</li>
      </ul>
      <span className="user">
        <img src={ fotoUser } alt="user" />
      </span>
    </header>

    </>
  );
}

export default Header;