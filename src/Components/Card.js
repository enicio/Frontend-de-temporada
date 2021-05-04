import React from 'react';
import Apartament from '../images/apartament.jpg'
import './Cards.scss';

function Card() {
  return(
    <div className="card">
      <div className="image">
        <img src={ Apartament } alt="Foto apartamento " />
      </div>
      <h1>JMB202 -  Suite Top Vista resort Jurere</h1>
      <h3>Jurere Internacional, 8 hospedes, 2 quartos</h3>
      <ul>
        <li> <span>Valor diária</span> <span>R$ 700,00 / Noite</span> </li>
        <li> <span>Total 5 diárias</span> <span>R$ 3500,00</span> </li>
        <li> <span>Taxa de limpeza</span> <span> R$ 200,00</span> </li>
        <li> <span>Caução</span> <span>R$ 1850,00</span> </li>
        <li> <span>Total</span> <span>R$ 3700,00 | R$ 3330 a vista</span> </li>
      </ul>
    </div>

  );
}

export default Card;