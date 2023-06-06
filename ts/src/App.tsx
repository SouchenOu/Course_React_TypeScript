import Message from './Message';
import ListGroup from './components/ListGroup'
import ListGroupTest from './components/ListGroupTest';

function App(){

  let elements = ["hello", "souchen", "from 1337"]
  return <div><ListGroup elements= {elements} heading = "numbers"></ListGroup>*
  
  <ListGroupTest></ListGroupTest>
  </div>;
}

export default App;