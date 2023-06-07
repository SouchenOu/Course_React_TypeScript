import Message from './Message';
import ListGroup from './components/ListGroup'

function App(){

  let elements = ["hello", "souchen", "from 1337"]
  const functionFirst = () =>
  {
    console.log("This is a function");
  }
  return <div><ListGroup elements= {elements} heading = "numbers" functionTest={functionFirst}></ListGroup>
  
  </div>;
}

export default App;