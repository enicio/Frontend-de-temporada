import { Route, Switch }  from 'react-router-dom'
import './App.css';
import Main from './Pages/main';
import Clientes from './Pages/clientes';
import Orcamento from './Pages/orcamento';
import Calendario from './Pages/calendarios';
import Propriedades from './Pages/properties';
import Controle from './Pages/controle';

function App() {
  return (
    <>
  <Switch>
    <Route exact path="/" component={Main}/>
    <Route path="/clientes" component={Clientes}/>
    <Route path="/orcamentos" component={Orcamento}/>
    <Route path="/calendario" component={Calendario}/>
    <Route path="/propriedades" component={Propriedades}/>
    <Route path="/controle" component={Controle}/>
  </Switch>
  </>
  );
}

export default App;
