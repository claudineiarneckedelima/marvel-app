import React, { useEffect, useState } from "react";
// import logo from "../assets/logo.svg";
import "./Caracteres.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { getStateRdx, setStateRdx } from "../services/rdx";

export default function Caracteres({ match, history }) {
  const [caracteres, setCaracteres] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    (async function load() {
      //store.dispatch({ type: "INCREMENT" });

      setStateRdx("INCREMENT", 5);

      const authorization = localStorage.getItem("authorization");
      if (!authorization) {
        history.push("/");
      }

      const list = [
        {
          id: 1,
          img: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
          name: "DR. STONE s fgs dfg sdfg s d fg s dfg s dfg s df gsdfg"
        },
        {
          id: 2,
          img: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
          name: "SUPERMAN"
        },
        {
          id: 3,
          img: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
          name: "AVATAR"
        }
      ];

      const filterList = list
        .filter(value => value.name.toLowerCase().indexOf(filterValue) !== -1)
        .map(value => value);
      setCaracteres(filterList);

      console.log(filterList);
    })();
  }, [filterValue]);

  function handleChange(e) {
    setFilterValue(e.target.value);

    // store.subscribe(() => console.log(store.getState()));

    // store.dispatch({ type: "INCREMENT" });
    // // 1
    // store.dispatch({ type: "INCREMENT" });
    // // 2
    // store.dispatch({ type: "DECREMENT" });
  }

  function handleSync() {
    const a = setStateRdx("SINCRONIZECARACTERES");
    a.then(value => {
      const aa = value.map(value2 => {
        return {
          id: value2.id,
          name: value2.name,
          thumbnail: `${value2.thumbnail.path}.${value2.thumbnail.extension}`,
          description: value2.description
        };
      });
      console.log("value");
      console.log(aa);
      console.log("value");
    });
  }

  return (
    <div>
      {caracteres.length > 0 ? (
        <div className="caracteres-container">
          {/* {caracteres.total} */}

          <div className="search-container">
            <button>
              <FontAwesomeIcon icon={faSync} onClick={handleSync} />
            </button>
            <input
              type="text"
              className="search"
              onChange={e => handleChange(e)}
            />
          </div>

          <ul>
            {caracteres.map(value => {
              return (
                <li
                  key={value.id}
                  onClick={() => history.push(`/caracteres/${value.id}`)}
                >
                  <div className="border-image">
                    <img src={value.img} alt="" />
                  </div>
                  <div className="name">{value.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>Nada Encontrado</div>
      )}
    </div>
  );
}
