import { Route }  from 'react-router-dom'
import './App.css';
import Card from './Components/Card';
import Header from './Components/header';
import SearchBar from './Components/searchBar';

function App() {
  return (
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

export default App;
