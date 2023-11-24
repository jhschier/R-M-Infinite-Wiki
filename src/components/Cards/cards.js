import React from "react";
import styles from "./cards.module.scss";

const cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, gender, species, origin, location, status } = x;
      return (
        <div key={id} className={` col-4 position-relative mb-4`}>
          <div className={`${styles.border}`}>
            <img
              src={image}
              alt="characters"
              className={`${styles.imgFluid} img-fluid`}
            />
            <div className="content p-2">
              <div className="fs-4 fw-bold mb-2">{name}</div>
              <div className="mb-1">{gender}</div>
              <div className="mb-1">{species}</div>
              <div className="fs-4 fw-bold mb-1">Origin:</div>
              <div className="">{origin.name}</div>
              <div className="fs-4 fw-bold mb-1">Last Location:</div>
              <div className="fs-6 fw-bold">{location.name}</div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display =
      "Hey Morty, *BURRRRP* There's no character in this ANIMATED SERIES with this name! *BURRRRP*";
  }

  return <>{display}</>;
};

export default cards;
