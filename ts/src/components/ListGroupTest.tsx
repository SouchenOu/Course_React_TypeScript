
import { Fragment } from "react"



function ListGroupTest()
{
    let arr = ["S1","S2","S3","S4"]

    return (
        <Fragment>
            <h1>Hello</h1>
            <ul>
                {arr.map((arrs)=>(<li className="" onClick={()=> console.log("hello souchen")}></li>))}
            </ul>
        </Fragment>
    )
}
export default ListGroupTest