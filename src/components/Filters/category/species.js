import React from "react";
import FilterBtn from "../filterBtn";

const species = ({ updatePageNumber, setSpecies }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header text-white" id="headingTwo">
        <button
          className="accordion-button bg-success collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((items, index) => (
            <FilterBtn
              key={index}
              updatePageNumber={updatePageNumber}
              task={setSpecies}
              name={species}
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default species;
