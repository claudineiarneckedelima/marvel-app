import React, { useEffect, useState } from "react";
// import logo from "../assets/logo.svg";
import "./Caracteres.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { stateRdx } from "../services/rdx";

export default function Caracteres({ match, history }) {
  const [caracteresFilter, setCaracteresFilter] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function load() {
      const authorization = localStorage.getItem("authorization");
      if (!authorization) {
        history.push("/");
      }

      let resopnse = stateRdx("LISTCARACTERES");

      if (resopnse.caracteres.length == 0)
        resopnse = stateRdx("SINCRONIZECARACTERES");

      const filterList = resopnse.caracteres
        .filter(value => value.name.toLowerCase().indexOf(filterValue) !== -1)
        .map(value => value);
      setCaracteresFilter(filterList);

      console.log("caracteresFilter");
      console.log(caracteresFilter);
      console.log("caracteresFilter");
    })();
  }, [filterValue]);

  function handleChange(e) {
    setLoading(false);
    setFilterValue(e.target.value);
  }

  function handleSync() {
    stateRdx("SINCRONIZECARACTERES");
    setFilterValue("response");
    setLoading(true);
    setTimeout(() => {
      setFilterValue("");
    }, 2000);
  }

  return (
    <div>
      <div className="caracteres-container">
        <div className="search-container">
          <button onClick={handleSync}>
            <FontAwesomeIcon icon={faSync} />
          </button>
          <input
            type="text"
            className="search"
            onChange={e => handleChange(e)}
          />
        </div>

        {caracteresFilter.length > 0 ? (
          <ul>
            {caracteresFilter.map(value => {
              return (
                <li
                  key={value.id}
                  onClick={() => history.push(`/caracteres/${value.id}`)}
                >
                  <div className="border-image">
                    <img src={value.thumbnail} alt="" />
                  </div>
                  <div className="name">{value.name}</div>
                </li>
              );
            })}
          </ul>
        ) : !loading ? (
          <div className="empty">Nada Encontrado :(</div>
        ) : (
          <div className="wait">Aguarde ...</div>
        )}
      </div>
    </div>
  );
}
