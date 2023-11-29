import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardsDetails = () => {
  let { id } = useParams();
  let [fetchedData, setFetchedData] = useState([]);
  let { name, image, species, gender, location, origin, status, type } =
    fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((response) => response.json());

      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center text-center">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-success">{name}</h1>
        <img src={image} alt="character-img" className="img-fluid" />

        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}

        <div className="content ">
          <div className="d-flex flex-column gap-1">
            <span className="fw-bold">Gender: </span> {gender}{" "}
            <span className="fw-bold">Species: </span> {species}{" "}
            <span className="fw-bold">Type: </span>{" "}
            {type === "" ? "Unknown" : type}
            <span className="fw-bold">Origin: </span> {origin?.name}
            <span className="fw-bold">Current Location: </span> {location?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDetails;
