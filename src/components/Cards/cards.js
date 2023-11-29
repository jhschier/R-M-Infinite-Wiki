import React from "react";
import { Link } from "react-router-dom";
import styles from "./cards.module.scss";

const cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, gender, species, origin, location, status } = x;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className={` col-lg-4 col-md-6 col-12 position-relative mb-4`}
        >
          <div
            className={`${styles.border} d-flex flex-column justify-content-center`}
          >
            <img
              src={image}
              alt="characters"
              className={`${styles.imgFluid} img-fluid`}
            />
            <div className="content p-2 text-success">
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
        </Link>
      );
    });
  } else {
    display =
      "Hey Morty, *BURRRRP* There's no character in this ANIMATED SERIES with this name! *BURRRRP*";
  }

  return <>{display}</>;
};

export default cards;
