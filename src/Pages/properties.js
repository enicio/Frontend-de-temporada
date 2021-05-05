import React from 'react';
import Header from '../Components/header';
import SearchBar from '../Components/searchBar';
import Apartament from '../images/apartament.jpg'
import Rules from '../Components/rules';
import Convenience from '../Components/convenience';
import './properties.scss';

function Propriedades() {

  const active = true;
  return(
    <>
    <Header />
    <SearchBar />
    <div className="properties-container">
      <div className="images-details">
        <img src={ Apartament } alt="Imagem do apartamento"/>
        <h4>Localização</h4>
        <p>Av Buzios, 1800, Jurerê Internacional, Florianópolis - SC</p>
        <p>CEP 89650-100</p>
      </div>
        <div className="dados">
        <div className="title">
          <h2>ILC2307 - Suite Top vista mar resort Jurece</h2>
          <h4>Jurerê Internacional, Florianópolis</h4>
          <h4>2 quartos, 3 camas, 2 baneiros</h4>
          <span>{(active)?"Ativo":"Inativo"}</span>
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
       <Rules />
      <Convenience />
      </div>
    </div>
    </>
  );
}

export default Propriedades;
