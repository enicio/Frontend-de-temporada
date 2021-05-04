import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import fotoUser from '../images/foto_trybe_Jessandro.jpg'
import './header.scss';

function Header(props) {
const [redirect, setRedirect ] = useState(false);
const [ classhtml, setClasshtml ] = useState({
  calendario: "",
  clientes: "",
  orcamentos: "",
  propiedades: "",
  controle: "",
  }
);
// console.log(window.location)

useEffect(() => {
  const location = window.location.pathname;
  const objectkey = location.slice(1)
  console.log(objectkey)
  setClasshtml({[objectkey] : "selected" })
},[])

function setSelected({ target }) {
  // const key = target.id;
  // setClasshtml({[key] : "selected" })

  console.log('ops')
  console.log(classhtml);
}

  return(
    <>
      <header className="header">
        <img className="logo" src={ logo } alt="Logotipo"  />
        <ul className="options">
        <Link to="/calendario">
          <li id="calendario"
            onClick={ (e) =>{ setSelected(e)}} className={classhtml.calendario} >
              Calendário
          </li>
          </Link>
          <Link to="/clientes">
          <li id="clientes"
            onClick={(e) => setSelected(e)} className={classhtml.clientes} >
              Clientes
          </li>
          </Link>
          <Link to="/orcamentos">
          <li id="orcamentos"
            onClick={(e) => setSelected(e)} className={classhtml.orcamentos} >
              Orçamentos
          </li>
          </Link>
          <Link to="/propriedades">
          <li id="propriedades"
            onClick={(e) =>{ setSelected(e)}} className={classhtml.propriedades}>
             Propriedades
          </li>
          </Link>
          <Link to="/controle">
          <li id="controle"
            onClick={(e) => setSelected(e)} className={classhtml.controle} >
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
