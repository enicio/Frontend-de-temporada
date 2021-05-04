import React from 'react';
import Header from '../Components/header';
import Card from  '../Components/Card'
import SearchBar from '../Components/searchBar';


function Clientes() {
  return(
    <>
    <Header />
    <SearchBar />
    <div className="card-container">
      <Card />
      <Card />
      <Card />
    </div>
    </>
  );
}

export default Clientes;