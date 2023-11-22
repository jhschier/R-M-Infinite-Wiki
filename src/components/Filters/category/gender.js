import React from "react";
import FilterBtn from "../filterBtn";

const gender = ({ updatePageNumber, setGender }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header text-white" id="headingThree">
        <button
          className="accordion-button bg-success collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((items, index) => (
            <FilterBtn
              key={index}
              updatePageNumber={updatePageNumber}
              task={setGender}
              name={genders}
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default gender;
