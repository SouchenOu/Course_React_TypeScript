import {Fragment} from "react" 
import { MouseEvent } from "react"
import {useState} from "react"

function ListGroup()
{
    const items = ["New Nork", "San fransisco", "Tokyo", "London"]
    const   cities = ["Agadir", "Casablanca", "Tanger", "sala"]
    const  countries = ["Maroc", "Germany", "canada", "Espagne"]
    if(items.length == 0)
        return (
            //We can write <></> or <Fragment></Fragment>
            <>
             <h1>List</h1>
             <p>No item found</p>
            </>
        )
    const handelClick = (event: MouseEvent) => console.log(event);
    //let selectedIndex = 0;
    // HOOK : a hook is a function that allows us to tap into built-in features in react, so this is called the stateHOOK
    //with stateHook we can tell react that this component can have data or state that will change overtime
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
    /************WE CAN WRITE THIS WITH ANOTHER METHOD */
        //React Fragment is a feature in React that allows you to return multiple elements from a React component
    // <Fragment>
    //     <h1>This is the navbar</h1>
    //         <ul className="list-group list-group-flush">
    //     <li className="list-group-item">An item</li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //     <li className="list-group-item">A fourth item</li>
    //     <li className="list-group-item">And a fifth one</li>
    //         </ul>
    // </Fragment>
    //**************************/
    

    // We can check if there is items or no outside here
    <Fragment>
        <h1>This is the navbar</h1>
            {items.length === 0 ? <p>No items</p> : null}
        <ul className="list-group list-group-flush">
            {items.map((item, index) => (<li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item' } key = {item}  onClick={() => console.log(item)}>{item}</li>))}
            {cities.map((city)=> (<li className="list-group-item" key = {city} onClick={handelClick}>{city}</li>))}
            {countries.map((country, index)=> (<li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key = {country} onClick={() => setSelectedIndex(index)}>{country}</li>))}
        </ul>
    </Fragment>
    );
}

export default ListGroup;