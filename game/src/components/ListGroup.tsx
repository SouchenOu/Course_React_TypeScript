import {Fragment} from "react" 

function ListGroup()
{
    return (
        //React Fragment is a feature in React that allows you to return multiple elements from a React component
    <Fragment>
        <h1>This is the navbar</h1>
            <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
            </ul>
    </Fragment>
    );
}

export default ListGroup;