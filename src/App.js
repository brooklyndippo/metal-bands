import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import MetalMeta from './components/MetalMeta';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
        <MetalMeta />
      </header>
    </div>
  );
}

export default App;
