import React from "react";

const filterBtn = ({ name, index, items, task, updatePageNumber }) => {
  return (
    <>
      <style>
        {`
          .x:checked + label {
            background-color: #28a745;
            color: #ffffff;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          onClick={() => {
            updatePageNumber(1);
            task(items);
          }}
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-success" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </>
  );
};

export default filterBtn;
