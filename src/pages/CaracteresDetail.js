import React, { useEffect, useState } from "react";
import "./CaracteresDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { stateRdx } from "../services/rdx";

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

      const response = stateRdx("LISTCARACTERES");
      const filterList = response.caracteres
        .filter(value => value.id == match.params.id)
        .map(value => value);

      setCaracteresFilterDetail(filterList[0]);
      setCaracteresFilterDetailSeries(filterList[0].series);

      console.log(filterList[0]);

      setTimeout(() => {
        console.log("====================================");
        console.log(caracteresFilterDetail);
        console.log("====================================");
      }, 3000);

      // {
      //   caracteresFilter.series.map(value=>(
      //     <li>{value.name}</li>
      //   ))
      // }
    })();
  }, []);
  return (
    <div className="caracteres-detail-container">
      <button
        className="action"
        onClick={() => history.push(`/caracteres/${match.params.id}/update`)}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <div className="border-image">
        <img
          src={caracteresFilterDetail.thumbnail}
          alt={caracteresFilterDetail.name}
        />
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
