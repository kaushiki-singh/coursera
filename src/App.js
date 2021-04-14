import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import SpecialSelection from './components/SpecialSelection';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
     <Header/>
     <SpecialSelection/>
     <Home/>
    </div>
  );
}

export default App;
