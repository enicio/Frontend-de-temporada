import React from 'react';
import './searchBar.scss'

function SearchBar() {
  return(
    <div className="searchbar">
      <label htmlFor="localization">
        Localização
        <input type="text" id="localization"></input>
      </label>
      <label htmlFor="price">
        Preço
        <input type="number" id="price"></input>
      </label>
      <label htmlFor="check-in">
        Check-in
        <input type="date" id="check-in"></input>
      </label>
      <label htmlFor="check-out">
        Check-out
        <input type="date" id="check-out"></input>
      </label>
      <label htmlFor="number-of-hospedes">
        N de hóspedes
        <input type="number" id="number-of-hospedes"></input>
      </label>
        <button className="search-button">Buscar</button>
        <span className="plus-filter"> + Filtros </span>
      </div>
  );
}

export default  SearchBar;
