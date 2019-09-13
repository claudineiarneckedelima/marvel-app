import React, { useEffect, useState } from "react";
import "./CaracteresUpdate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

export default function CaracteresUpdate({ match, history }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
      (function load() {
        setName("DR. STONE");
        setDescription("asfasd fasdf asdf asdfasdf asdfas dasdf");
      })();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
    }

  return (
    <div className="caracteres-update-container">
      <div className="border-image">
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg" alt="" />
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
      >
        {description}
      </textarea>
      <button type="submit">Atualizar</button>

      </form>
    </div>
  );
}
