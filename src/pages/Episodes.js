import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/cards";
import InputGroup from "../components/Filters/category/inputGroup";

const Episodes = () => {
  let [info, setInfo] = useState([]);
  let [results, setResults] = React.useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
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
          Episode: {""}
          <span className="text-success">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center ">
          <span className="text-success">
            Air Date: {""}
            {air_date === "" ? "Unknown" : air_date}
          </span>
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup changeID={setID} name="Episode" total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
