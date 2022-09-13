import React, { useEffect, useState } from "react";

export const Checkbox = () => {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const option = e.target.value;
    console.log(option);

    let newCategory = [...data];

    
    if (data.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setData(newCategory);
  };
  console.log("Cdata", data);

  const ch1 = (element) => element == "max";
  const ch2 = (element) => element == "sam";
  const ch3 = (element) => element == "mosh";
  const max = data.some(ch1);
  const sam = data.some(ch2);
  const mosh = data.some(ch3);
  console.log(max, sam, mosh);

  return (
    <div>
      <h1>CheckBox</h1>
      <div>
        <div>
          <input
            type="checkbox"
            value="max"
            defaultChecked={data.includes("max")}
            onChange={handleChange}
          />
          <label>Max</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="sam"
            defaultChecked={data.includes("sam")}
            onChange={handleChange}
          />
          <label>Sam</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="mosh"
            defaultChecked={data.includes("mosh")}
            onChange={handleChange}
          />
          <label>Mosh</label>
        </div>
      </div>
      <div>
        <div>
          {max && <p>you has selected max having id 0 whose age is 22 years</p>}
        </div>
        <div>
          {sam && <p>you has selected sam having id 1 whose age is 25 years</p>}
        </div>
        <div>
          {mosh && (
            <p>you has selected mosh having id 2 whose age is 27 years</p>
          )}
        </div>
      </div>
    </div>
  );
};
