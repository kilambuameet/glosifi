import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/Hero/Hero'
import index from './components/Body/body';
import Body from './components/Body/body';

function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Body/>
    </div>
  );
}

export default App;
