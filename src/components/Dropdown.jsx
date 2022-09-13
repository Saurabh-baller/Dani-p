import React, { useState } from "react";

export const Dropdown = () => {
  const [data, setData] = useState("");
  const handelSelect = (e) => {
    setData(e.target.value);
  };
  console.log(data);
  return (
    <div>
      <h1>Dropdown</h1>
      <select onChange={handelSelect}>
        <option value="max">max</option>
        <option value="sam">sam</option>
        <option value="mosh">mosh</option>
      </select>
      <div>
        <div>
          {data == "max" && (
            <p>you has selected max having id 0 whose age is 22 years</p>
          )}
        </div>
        <div>
          {data == "sam" && (
            <p>you has selected sam having id 1 whose age is 25 years</p>
          )}
        </div>
        <div>
          {data == "mosh" && (
            <p>you has selected mosh having id 2 whose age is 27 years</p>
          )}
        </div>
      </div>
    </div>
  );
};
