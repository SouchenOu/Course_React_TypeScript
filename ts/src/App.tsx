import Message from './Message';
import ListGroup from './components/ListGroup'
import ListGroupTest from './components/ListGroupTest';
import Allert from './components/Allert';
import button from './components/button';
import {useState} from "react"

function App(){

  let elements = ["hello", "souchen", "from 1337"]
  var arr = ["Q1", "Q2", "Q3"];
  const functionFirst = () =>
  {
    console.log("This is a function");
  }

  const [alertVisible, setAlertVisibility] = useState(false)
  return <div>
    <button onClick={()=> setAlertVisibility(true)} color="secondary">button</button>
    {alertVisible && <Allert>allert</Allert>}
    <ListGroup elements= {elements} heading = "numbers" functionTest={functionFirst}></ListGroup>
    <Allert>hello <span>souchen</span> </Allert>
    
  </div>;
}

export default App;