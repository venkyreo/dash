import { useState } from "react"


export default function Parent(){
    const [users ,setUsers] =useState()

    const getData =() => { 
        setUsers("")
    }
    const handleChange =(e) => { 
       setUsers(e.target.value)
    }
    return(
        <>
        <input  value={users} type="text" placeholder="enterText" onChange={handleChange} />
        <Child users ={users} getData= {()=> getData()}/>

        </>
    )
}

function Child( {users , getData}){
    // const handleClick = (e) => {
    //     //  e.preventDefault()
    //     getData(users)
    // }
return(
    <>
    <p>entertext: {users}</p>
       <button onClick={()=>getData()}>reset </button>
       <p></p>
    </>
)

}