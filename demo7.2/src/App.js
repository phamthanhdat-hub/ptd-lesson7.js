import logo from './logo.svg';
import './App.css';
import PTDuseState from './components/PTDuseState';
import PTDuseEffect from './components/PTDuseEffect';
import PTDuseContext from './components/PTDuseContext';
import './App.css'
function App() {
  return (
    <div className="container border mt -3">
      <h1 className='text-center'> Pham Thanh Dat-Hook</h1>
      <hr/>
      <PTDuseState />
      <hr/>
      <PTDuseEffect />
      <hr/>
      <PTDuseContext />
    </div>
  );
}

export default App;
