import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CountriesList></CountriesList>
    </div>
  );
}

export default App;
