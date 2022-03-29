import Header from './components/Header.js';
import Formulaire from './components/Formulaire.js';
import Proposition from './components/Proposition.js';
import Cartes from './components/Cartes.js';
import Liste from './components/Liste.js';
import { useRecoilState } from 'recoil';
import {suggestions} from "./atoms/suggestions";



function App() {
  return (
    <div className="App">
      <Header titre="Boite à idée" />
      <Formulaire />
      <Proposition titre="La liste des propostions" />
      {/* <Liste /> */}
    </div>
  );
}

export default App;
