import React from "react";
import Gender from "./category/gender";
import Species from "./category/species";
import Status from "./category/status";

const Filters = ({ setStatus, updatePageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  return (
    <div className="col-3 me-5">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-center text-success text-decoration-underline mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status updatePageNumber={updatePageNumber} setStatus={setStatus} />
        <Species updatePageNumber={updatePageNumber} setSpecies={setSpecies} />
        <Gender updatePageNumber={updatePageNumber} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;
