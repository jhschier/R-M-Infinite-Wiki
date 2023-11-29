import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/cards";
import InputGroup from "../components/Filters/category/inputGroup";

const Location = () => {
  let [info, setInfo] = useState([]);
  let [results, setResults] = React.useState([]);
  let { type, name, dimension } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center m-4">
          Location: {""}
          <span className="text-success">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center ">
          <span className="text-success">
            Dimension: {""}
            {dimension === "" ? "Unknown" : dimension}
          </span>
        </h5>
        <h6 className="text-center ">
          <span className="text-success">
            Type: {""}
            {type === "" ? "Unknown" : type}
          </span>
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup changeID={setNumber} name="Location" total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
