

import React, {useState,useEffect } from 'react';

    function App ({onCountChange =() =>{}}) {

      const[count,setCount]= useState(0);
    
      useEffect (()=>{
        onCountChange(count);
      },([count])
    )


    return (
      <div>
        <p>Count: {count}</p>
        <button className="increment" onClick={()=>{ setCount (count +1);
        }}
        >Increment count</button>
        </div>
    );
  }


    

     

    export default App;