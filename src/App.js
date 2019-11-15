import React from "react";
import { ReadStream } from "fs";

const App = () =>{
  const [name,setname]= React.useState("");
  const [color,setcolor] = React.useState([0,0,0]);
  React.useEffect(()=>{
    setcolor(randcolor());
  },[name]);
  const randcolor=()=>{
    return [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)];
  }

  return(
    <div className="root">
      <input
        type="text"
        placeholder="name"
        onChange={e=>setname(e.target.value)}
      />
    <div style={{color:`rgb(${color[0]},${color[1]},${color[2]})`}}>name:{name}</div>
    </div>
  )
};
export default App;