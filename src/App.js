import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { Checkbox } from "./components/Checkbox";
import { Radio } from "./components/Radio";

function App() {
 const [showCheck, setshowCheck] = useState(false);
  const [showdropdown, setshowdropdown] = useState(false);
  const [showRadio, setshowRadio] = useState(false);

const drop = () => {
  setshowdropdown((prev) =>!prev)
}
console.log(showdropdown);

const rad = () =>{
  setshowRadio((res)=> !res)
};
 
const check = () => {
  setshowCheck((res) => !res)
};


  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <button onClick={drop}>DropDown</button>
        </div>
        <div>
          <button onClick={check}>Checkbox</button>
        </div>
        <div>
          <button onClick={rad}>RadioButton</button>
        </div>
      </div>
      <div>
        <div>
          {showdropdown ? <Dropdown/> : ""}
        </div>
        <div>{showCheck ? <Checkbox/> : ""}</div>
        <div>{showRadio ? <Radio/> : ""}</div>
      </div>
    </div>
  );
}

export default App;
