import Message from './Message';
import ListGroup from './components/ListGroup'

function App(){

  let elements = ["hello", "souchen", "from 1337"]
  return <div><ListGroup elements= {elements} heading = "numbers"></ListGroup></div>;
}

export default App;