import React, { useState } from 'react';

function Convenience() {
  const [ comodidades , setComodidades ] = useState({
    estacionamento: true,
    elevador: false,
    porteiro: false,
    piscina: true,
    internet: false,
    wifi: false,
    arCondicionado: true
  })


  return(
    <div className="comodidades">
    <h4>Comodidades</h4>
    <ul className="amenities">
      <li>Estacionamento
        <span className={ (comodidades.estacionamento)?"permite":"naoPermite"}>
            {(comodidades.estacionamento)?'sim': 'não'}
        </span>
      </li>
      <li>Elevador
        <span className={ (comodidades.elevador)?"permite":"naoPermite"}>
            {(comodidades.elevador)?'sim': 'não'}
        </span>
      </li>
      <li>Porteiro
        <span className={ (comodidades.porteiro)?"permite":"naoPermite"}>
            {(comodidades.porteiro)?'sim': 'não'}
        </span>
      </li>
      <li>Piscina Privada
        <span className={ (comodidades.piscina)?"permite":"naoPermite"}>
            {(comodidades.piscina)?'sim': 'não'}
        </span>
      </li>
      <li>Internet
        <span className={ (comodidades.internet)?"permite":"naoPermite"}>
            {(comodidades.internet)?'sim': 'não'}
        </span>
      </li>
      <li>Wi-fi
        <span className={ (comodidades.wifi)?"permite":"naoPermite"}>
            {(comodidades.wifi)?'sim': 'não'}
        </span>
      </li>
      <li>Ar Condicionado
        <span className={ (comodidades.arCondicionado)?"permite":"naoPermite"}>
            {(comodidades.arCondicionado)?'sim': 'não'}
        </span>
      </li>
    </ul>
  </div>

  );
}

export default Convenience;