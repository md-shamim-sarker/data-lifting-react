import './App.css';
import Grandparent from './components/Grandparent/Grandparent';

function App() {
  return (
    <div className="App">
      <h1>Data Pass Child To Parent <br />(Lifting State Up)</h1>
      <Grandparent></Grandparent>
    </div>
  );
}

export default App;
