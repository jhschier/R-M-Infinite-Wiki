import React from "react";

const InputGroup = ({ total }) => {
  return (
    <div className="input-group mb-3">
      <select className="form-select" id="inputGroupSelect01">
        <option>Choose...</option>
        {[...Array(total).keys()].map((x) => {
          return <option defaultValue={x + 1}>Episode {x + 1}</option>;
        })}
      </select>
    </div>
  );
};

export default InputGroup;
