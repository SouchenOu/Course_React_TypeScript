import {Fragment} from "react"


function ListGroupTest()
{
    let test= ["A1","A2","A3"];
    return(
        <Fragment>
            <h1>test1</h1>
            <ul>
                {/* <li>A1</li>
                <li>A2</li>
                <li>A3</li> */}
                {(test.map((t) => (<li className="" onClick={() => console.log("hello")}>{t}</li>)))}
            </ul>

        </Fragment>
    )

}


export default ListGroupTest;