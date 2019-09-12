import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "./Caracteres.scss";
import api from "../services/api";

export default function Caracteres({ match, history }) {
  const [caracteres, setCaracteres] = useState([]);

  useEffect(() => {
    (async function load() {
      const authorization = localStorage.getItem("authorization");

      const response = await api.get(`/characters${authorization}`);

      console.log(response.data.data);

      setCaracteres(response.data.data);
    })();
  }, [match.params.id]);

  return (
    <div>
      {caracteres && (
        <div className="caracteres-container">
          {caracteres.total}

          <div className="search-container">
            <input type="text" className="search" type="search" />
          </div>

          <ul>
            <li>
              <div className="border-image">
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
                  alt=""
                />
              </div>
              <div className="name">
                DR. STONE s fgs dfg sdfg s d fg s dfg s dfg s df gsdfg
              </div>
            </li>
            <li>
              <div className="border-image">
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
                  alt=""
                />
              </div>
              <div className="name">SUPERMAN</div>
            </li>
            <li>
              <div className="border-image">
                <img
                  src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
                  alt=""
                />
              </div>
              <div className="name">AVATAR</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
