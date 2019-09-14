import React, { useEffect, useState } from "react";
import "./CaracteresUpdate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { stateRdx } from "../services/rdx";
import { Link } from "react-router-dom";
import { ToastsContainer, ToastsStore } from "react-toasts";

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

      stateRdx("LISTCARACTERES").then(value => {
        setAllData(value.caracteres);

        const filterList = value.caracteres
          .filter(value2 => value2.id == match.params.id)
          .map(value3 => value3);

        setImage(filterList[0].thumbnail);
        setName(filterList[0].name);
        setDescription(filterList[0].description);
      });
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
        };
      }
      return value;
    });

    const response = stateRdx("UPDATECARACTERES", obj);

    response.then(value => {
      if (value.status.trim() == "Ok") {
        ToastsStore.success("Dados atualizados com sucesso");

        setTimeout(() => {
          history.push(`/caracteres/${match.params.id}`);
        }, 3000);
      } else
        ToastsStore.error(
          value.status + "Dados não atualizados, favor tente novamente"
        );
    });
  }

  return (
    <div className="caracteres-update-container">
      <div className="border-image">
        <Link to={`/caracteres/${match.params.id}`}>
          <img src={image} alt={name} />
        </Link>
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
      <ToastsContainer store={ToastsStore} />
    </div>
  );
}
