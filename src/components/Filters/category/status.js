import React from "react";
import FilterBtn from "../filterBtn";

const status = ({ setStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header text-white" id="headingOne">
        <button
          className="accordion-button bg-success "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((items, index) => (
            <FilterBtn
              task={setStatus}
              updatePageNumber={updatePageNumber}
              key={index}
              name={status}
              index={index}
              items={items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default status;
