import React, { useEffect, useState } from "react";

export default function Count() {
    const [count, setCount] =useState(() => {
        const storedCount = localStorage.getItem("setCountValue");
        return storedCount ? JSON.parse(storedCount) : 0;
    });

    useEffect(() =>{ 
       localStorage.setItem("setCountValue" ,JSON.stringify(count))
    },[count]);
   
    return (
        <>
            <p>counter : {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>

            <button onClick={() => setCount(prevCount => prevCount + 2)}>Increment 2</button>

            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>

            <button onClick={() => setCount(prevCount => prevCount - 2)}>Decrement 2</button>
        </>
    )
}


// import React, { useEffect, useState } from "react";

// export default function Count() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         const storedCount = JSON.parse(localStorage.getItem("setCountValue"));
//         if (storedCount !== null) {
//             setCount(storedCount);
//         }
//     }, []);
//     const handleIncrement =(value)=> {
//         setCount(prevCount => prevCount + value)
//    }
//     const handleDecrement =(value)=> {
//          setCount(prevCount => prevCount - value)
//     }
//     useEffect(() =>{ 
//        localStorage.setItem("setCountValue" ,JSON.stringify(count))
//     },[count])
   
    
//     return (
//         <>
//             <p>counter : {count}</p>
//             <button onClick={() => handleIncrement(1)}>Increment</button>

//             <button onClick={() => handleIncrement(2)}>Increment 2</button>

//             <button onClick={() => handleDecrement(1)}>Decrement</button>

//             <button onClick={() => handleDecrement(2)}>Decrement 2</button>
//         </>
//     )
// }