import React from 'react';
import Header from '../Components/header';
import SearchBar from '../Components/searchBar';
import Apartament from '../images/apartament.jpg'


function Propriedades() {
  const ac = true;
  return(
    <>
    <Header />
    <SearchBar />
    <div className="properties-container">
      <div>
        <img src={ Apartament } alt="Imagem do apartamento"/>
        <h4>Localização</h4>
        <p>Av Buzios, 1800, Jurerê Internacional, Florianópolis - SC</p>
        <p>CEP 89650-100</p>
      </div>

      <div className="">
        <h2>ILC2307 - Suite Top vista mar resort Jurece</h2>
        <h4>Jurerê Internacional Florianópolis</h4>
        <h4>2 quartos, 3 camas, 2 baneiros</h4>
      </div>
      <div className="mini-cards">
        <div className="max-hospedes">
          <h4>Máx. de hóspedes</h4>
          <span>6</span>
        </div>
        <div className="tax-clean">
          <h4>Taxa de limpeza</h4>
          <span>R$ 50,00</span>
        </div>
        <div className="caucao">
          <h4>Caução</h4>
          <span>R$ 700,00</span>
        </div>
      </div>
      <div className="camas">
        <h4> Camas </h4>
        <ul>
          <li><b> 1 Cama de Casal: </b> duplo</li>
          <li><b> 1 sofá cama: </b> sala/área comum</li>
        </ul>
      </div>
      <div className="regras">
        <h4>Regras</h4>
        <ul className="list-of-rules">
          <li>Aceita crianças (de 02 até 12 anos) 
            <span style={(ac)?{background: "green"}:{background: "red"}}>{(ac)?'sim': 'não'}</span></li>
          <li>Aceita Bebês (abaixo de 02 anos)</li>
          <li>Fornece Berços</li>
          <li>Restrição de Idade minima para Fazer reserva</li>
          <li>Permitido fumar no Quarto</li>
          <li>Aceita Animais de Estimação</li>
          <li>Eventos são Permitidos</li>
        </ul>
      </div>
      <div className="Comodidades">
        <ul className="amenities">
          <li>Estacionamento</li>
          <li>Elevador</li>
          <li>Porteiro</li>
          <li>Piscina Privada</li>
          <li>Internet</li>
          <li>Wi-fi</li>
          <li>Ar Condicionado</li>
        </ul>
      </div>

    </div>
    </>
  );
}

export default Propriedades;