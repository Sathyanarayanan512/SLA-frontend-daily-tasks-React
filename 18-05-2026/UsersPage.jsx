import {useParams} from 'react-router-dom'
import {useState } from 'react'

function UsersPage(){
    const params = useParams();
    console.log(params)

    const [isDisplay, setDisplay] = useState(false)

    function handleClick(){
        return (
            <>
                <h2>User : {params.id}</h2>
                <h2>Name : {params.name}</h2>
            </>
        )
    }

    return (
        <>
            <h1>Users Page</h1>
            <button onClick={()=>setDisplay(!isDisplay)}>{isDisplay ? "Hide" : "View"} Available User</button>
            {isDisplay ? handleClick() : null}
            
        </>
    )
}

export default UsersPage

// {isDisplay && (
//     <>
//         <h2>User : {id}</h2>
//         <h2>Name : {name}</h2>
//     </>
// )}
