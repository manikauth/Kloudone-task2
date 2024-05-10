import "./App.css";
import { useState } from "react";
import React from "react";
import { Button } from "antd";


function App() {


  const [color, setcolor] = useState();

  const divstyle = { backgroundColor: color };

  return (
    <div>
      <h1>Color Picker</h1>

      <div style={divstyle}>
        <p>The Color is {color}</p>
        <Button type="primary" onClick={() => setcolor("Aquamarine")}>
          Aquamarine
        </Button>
        &ensp;
        <Button type="primary" onClick={() => setcolor("BlueViolet")}>
          BlueViolet
        </Button>
        &ensp;
        <Button type="primary" onClick={() => setcolor("Chartreuse")}>
          Chartreuse
        </Button>
        &ensp;
        <Button type="primary" onClick={() => setcolor("CornflowerBlue")}>
          CornflowerBlue
        </Button>
   
    
      </div>
    </div>
  );
}

export default App;
