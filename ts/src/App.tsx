import Message from './Message';
import ListGroup from './components/ListGroup'
import ListGroupTest from './components/ListGroupTest';

function App(){

  let elements = ["hello", "souchen", "from 1337"]
  var arr = ["Q1", "Q2", "Q3"];
  const functionFirst = () =>
  {
    console.log("This is a function");
  }
  return <div><ListGroup elements= {elements} heading = "numbers" functionTest={functionFirst}></ListGroup>
    <ListGroupTest array={arr} test = "souchen"></ListGroupTest>
  </div>;
}

export default App;