import logo from './logo.svg';
import './App.css';
import Container from './Calculator/Components/Container';
import Calculator from './Calculator/Components/Calculator';

function App() {
  return (
    <div className="App">
      <Container>
        <Calculator />
      </Container>
    </div>
  );
}

export default App;
