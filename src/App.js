
import './App.css';
import Clock from './Components/Clock';

function App() {
  return (
    <>
    <div className="App">
     <h1>My first react app</h1>
    </div>

    <Clock show country="ITALY" timezone="2"/>
    <Clock country="RUSSIA" timezone="3"/>
    <Clock country="CUBA" timezone="-6"/>
    </>
  );
}

export default App;
