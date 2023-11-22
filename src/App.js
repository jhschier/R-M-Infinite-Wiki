import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/filters";
import Cards from "./components/Cards/cards";
import Pagination from "./components/Pagination/pagination";
import Search from "./components/Search/search";

function App() {
  let [pageNumber, updatePageNumber] = useState(1);

  let [search, setSearch] = useState("");

  let [status, setStatus] = useState("");

  let [gender, setGender] = useState("");

  let [species, setSpecies] = useState("");

  let [fetchedData, setFetchedData] = useState([]);

  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json());

      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center creepster my-4">
        <span className="text-success">Rick and Morty's </span>
        <span className="text-primary"> Infinite WiKi</span>
      </h1>
      <Search updatePageNumber={updatePageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
}

export default App;
