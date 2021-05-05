import React, { useState } from 'react';


function Rules() {
  const [ regras , setRegras ] = useState({
    criancas: true,
    bebes: false,
    berco: false,
    IdadeMinima: true,
    animais: false,
    eventos: false
  })


  return(
   <div className="regras">
          <h4>Regras</h4>
          <ul className="list-of-rules">
            <li>Aceita crianças (de 02 até 12 anos)
              <span className={ (regras.criancas)?'permite':'naoPermite'}>
                {(regras.criancas)?'sim': 'não'}
              </span>
            </li>
            <li>Aceita Bebês (abaixo de 02 anos)
              <span className={ (regras.bebes)?"permite":"naoPermite"}>
                {(regras.bebes)?'sim': 'não'}
              </span>
            </li>
            <li>Fornece Berços
              <span className={ (regras.berco)?"permite":"naoPermite"}>
                {(regras.berco)?'sim': 'não'}
              </span>
            </li>
            <li>Restrição de Idade minima para Fazer reserva
              <span className={ (regras.IdadeMinima)?"permite":"naoPermite"}>
                {(regras.IdadeMinima)?'sim': 'não'}
              </span>
            </li>
            <li>Permitido fumar no Quarto
              <span className={ (regras.criancas)?"permite":"naoPermite"}>
                {(regras.criancas)?'sim': 'não'}
              </span>
            </li>
            <li>Aceita Animais de Estimação
              <span className={ (regras.animais)?"permite":"naoPermite"}>
                {(regras.animais)?'sim': 'não'}
              </span>
            </li>
            <li>Eventos são Permitidos
              <span className={ (regras.eventos)?"permite":"naoPermite"}>
                {(regras.eventos)?'sim': 'não'}
              </span>
            </li>
          </ul>
        </div>
  );
}


export default Rules;
