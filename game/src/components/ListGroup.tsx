import {Fragment} from "react" 

function ListGroup()
{
    const items = ["New Nork", "San fransisco", "Tokyo", "London"]
    const   cities = ["Agadir", "Casablanca", "Tanger", "sala"]

    if(items.length == 0)
        return (
            //We can write <></> or <Fragment></Fragment>
            <>
             <h1>List</h1>
             <p>No item found</p>
            </>
        )
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
            {items.map((item) => (<li className="list-group-item" key = {item}  onClick={() => console.log(item)}>{item}</li>))}
            {cities.map((city, index) => (<li key = {city} onClick={()=> console.log(city, index)} >{city}</li>))}
        </ul>
    </Fragment>
    );
}

export default ListGroup;