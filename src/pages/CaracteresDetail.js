import React, { useEffect, useState } from "react";
import "./CaracteresDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { stateRdx } from "../services/rdx";
import { Link } from "react-router-dom";

export default function CaracteresDetail({ match, history }) {
  const [caracteresFilterDetail, setCaracteresFilterDetail] = useState([]);
  const [
    caracteresFilterDetailSeries,
    setCaracteresFilterDetailSeries
  ] = useState([]);

  useEffect(() => {
    (function load() {
      const authorization = localStorage.getItem("authorization");
      if (!authorization) {
        history.push("/");
      }

      stateRdx("LISTCARACTERES").then(value => {
        const filterList = value.caracteres
          .filter(value2 => parseInt(value2.id) === parseInt(match.params.id))
          .map(value3 => value3);

        setCaracteresFilterDetail(filterList[0]);
        setCaracteresFilterDetailSeries(filterList[0].series);
      });

    })();
  }, [match.params.id, history]);
  return (
    <div className="caracteres-detail-container">
      <button
        className="action"
        onClick={() => history.push(`/caracteres/${match.params.id}/update`)}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <div className="border-image">
        <Link to="/caracteres">
          <img
            src={caracteresFilterDetail.thumbnail}
            alt={caracteresFilterDetail.name}
          />
        </Link>
      </div>
      <div className="name">{caracteresFilterDetail.name}</div>

      <div className="description">{caracteresFilterDetail.description}</div>

      <div className="series">
        <label htmlFor="">Séries:</label>
        <ul>
          {caracteresFilterDetailSeries.map((value, i) => (
            <li key={i}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
