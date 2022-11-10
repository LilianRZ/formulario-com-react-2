import './App.css';
import Firstcomponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import FourthComponent from './components/FourthComponent';
import FifthComponent from './components/FifthComponent';

function App() {
  return (
    <div className="App">
      <form>
        <h1>Formulário</h1>
        <Firstcomponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
      </form>
    </div>
  );
}

export default App;
