import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <ReactPaginate
        className="pagination justify-content-center gap-4 m6"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Previous"
        previousClassName="btn btn-success fs-5"
        nextClassName="btn btn-success fs-5"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageclassName="page-item"
        pageLinkclassName="page-link"
      />
    </>
  );
};
export default Pagination;
