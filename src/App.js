import './App.css'
import { ToDoWrapper } from './components/ToDoWrapper';
import { FeaturesWrapper } from './components/FeaturesWrapper';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row className="App">
        <ToDoWrapper/>
        <FeaturesWrapper />
      </Row>
    </Container>
  );
}

export default App;
