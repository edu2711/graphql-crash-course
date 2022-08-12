import './App.css';
import CharactersList from './pages/CharacterList';
import Character from './pages/Character';
import Locations from './pages/Locations';
import {
  Routes,
  Route,
} from "react-router";


function App() {
  return (
    <div className="App">
         <Routes> 
           <Route path="/" exact element={<CharactersList />} /> 
           <Route path="/character/:id" element={<Character/>} />
           <Route path="/search" element={<Locations/>} />
         </Routes> 
     </div>
  );
}

export default App;
