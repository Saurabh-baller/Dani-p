import React, { useState } from "react";

export const Radio = () => {
  const [data, setData] = useState("");

  const handleSortBy = (e) => {
    setData(e.target.value);
  };
  console.log(data);
  return (
    <div>
      <h1>Radio</h1>

      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="max"
            name="data"
            defaultChecked={data === "max"}
          />
          <label>Max</label>
        </div>

        <div>
          <input
            type="radio"
            value="sam"
            name="data"
            defaultChecked={data === "sam"}
          />
          <label>Sam</label>
        </div>
        <div>
          <input
            type="radio"
            value="mosh"
            name="data"
            defaultChecked={data === "mosh"}
          />
          <label>Mosh</label>
        </div>
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
    </div>
  );
};
