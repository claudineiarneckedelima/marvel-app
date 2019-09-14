import React, { useEffect, useState } from "react";
// import logo from "../assets/logo.svg";
import "./Caracteres.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { stateRdx } from "../services/rdx";
import { ToastsContainer, ToastsStore } from "react-toasts";

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

      stateRdx("LISTCARACTERES").then(value=>{
      if (value.status.trim() !== "Ok"){
        ToastsStore.error(value.status+"Ocorreu um erro ao listar os dados");
        setTimeout(() => {
          history.push(`/login`);
        }, 5000);
      }

      if (value.caracteres.length == 0)
      value = stateRdx("SINCRONIZECARACTERES");

      const filterList = value.caracteres
        .filter(value2 => value2.name.toLowerCase().indexOf(filterValue) !== -1)
        .map(value3 => value3);
      setCaracteresFilter(filterList);

      });

      
    })();
  }, [filterValue]);

  function handleChange(e) {
    setLoading(false);
    setFilterValue(e.target.value);
  }

  function handleSync() {
    stateRdx("SINCRONIZECARACTERES").then(value => {
      if (value.status.trim() === "Ok") {
        ToastsStore.success("Dados sincronizados com sucesso");
        setFilterValue("response");
        setLoading(true);
        setTimeout(() => {
          setFilterValue("");
        }, 2000);
      } else {
        ToastsStore.error("Dados não sincronizados, favor tente novamente");
        setTimeout(() => {
          history.push(`/login`);
        }, 4000);
      }
    });
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
        ) : !loading && (
          <div className="empty">Nada Encontrado :(</div>
        )}
      </div>
      <ToastsContainer store={ToastsStore} />
    </div>
  );
}
