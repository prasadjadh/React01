import React from "react";
import ReactDOM from "react-dom";
import fName,{lName,age} from "./App";

ReactDOM.render(
    <>
    <div>
        <ol>
      <li>Prasad</li>
      <li>{fName}</li>
      <li>{lName}</li>
      <li>{age}</li>
        </ol>
        
    </div>
    </>,document.getElementById('root')
)
