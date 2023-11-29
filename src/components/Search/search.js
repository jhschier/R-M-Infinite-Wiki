import React from "react";
import styles from "./search.module.scss";

const search = ({ setSearch, updatePageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 my-5">
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search a character"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`${styles.btn} btn btn-success fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default search;
