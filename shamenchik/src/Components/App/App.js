import './App.css';
import {Nav} from '../Nav/index';
import {Alerts} from '../Alerts/index';
import {Container} from '../Container/index';

function App() {
  return (
    <div className="App">
      <Nav />
      <Alerts />
      <Container />
    </div>
  );
}

export default App;
