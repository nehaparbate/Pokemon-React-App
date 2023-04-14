
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import PokemonPage from './Components/PokemonPage';

const App = () => {
  return (
    <Router>
    <Route exact path='/' component={Homepage} />
    <Route path='/pokemon/:id' component={PokemonPage}/>
    </Router>
  );
}

export default App;
