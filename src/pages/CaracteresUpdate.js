import React, { useEffect, useState } from "react";
import "./CaracteresUpdate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { stateRdx } from "../services/rdx";

export default function CaracteresUpdate({ match, history }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [allData, setAllData] = useState("");

  useEffect(() => {
    (function load() {
      const authorization = localStorage.getItem("authorization");
      if (!authorization) {
        history.push("/");
      }

      const response = stateRdx("LISTCARACTERES");

      // console.log(response.caracteres.length , response.caracteres);
      
      // if (!response.caracteres.length) history.push(`/caracteres`);

      setAllData(response.caracteres);

      const filterList = response.caracteres
        .filter(value => value.id == match.params.id)
        .map(value => value);

      console.log(filterList);

      setImage(filterList[0].thumbnail);
      setName(filterList[0].name);
      setDescription(filterList[0].description);
    })();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const obj = allData.map(value => {
      if (value.id == match.params.id) {
        return {
          id: value.id,
          series: value.series,
          thumbnail: value.thumbnail,
          name,
          description
        }
      }
      return value;
    });

    stateRdx("UPDATECARACTERES", obj);

    setTimeout(() => {
      history.push(`/caracteres`);
    }, 1000);
  }

  return (
    <div className="caracteres-update-container">
      <div className="border-image">
        <img src={image} alt={name} />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome do personagem</label>
        <input
          className="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="">Descrição do personagem</label>
        <textarea
          className="description"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
