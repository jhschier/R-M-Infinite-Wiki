import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/filters";
import Cards from "./components/Cards/cards";

function App() {
  let [pageNumber, setPageNumber] = useState(1);

  let [fetchedData, setFetchedData] = useState([]);

  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

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

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
