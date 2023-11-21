import React from "react";

const pagination = ({ pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber((x) => x + 1);
  };

  let prev = () => {
    if (pageNumber === 1) return;

    setPageNumber((x) => x - 1);
  };

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prev} className="btn btn-success">
        Previous
      </button>
      <button onClick={next} className="btn btn-success">
        Next
      </button>
    </div>
  );
};

export default pagination;
