import { Fragment } from "react";


interface struct {
    array : string[];
    test : string;
}
function ListGroupTest(Struct : struct)
{
    var tables= ["T1", "T2","T3", "T4"];
    return (
    <Fragment>
        <h1>Test2</h1>
        <ul>
            {Struct.array.map((tab) => (<li className="" onClick={()=> console.log(Struct.test)}>{tab}</li>))}
        </ul>
    </Fragment>
    )
}



export default ListGroupTest;