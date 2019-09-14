import React, { useEffect } from "react";
import { stateRdx } from "../services/rdx";
import "./Login.scss";

export default function Login({ history }) {
  useEffect(() => {
    (async function load() {
      localStorage.setItem(
        "authorization",
        "?ts=claudi6292566&apikey=1b7c523c768d821d1316c733b16ce06c&hash=07d98960fc9ba7be1696eec45561873f"
      );

      localStorage.setItem("data", {
        caracteres: []
      });

      stateRdx("SINCRONIZECARACTERES");

      setTimeout(() => {
        history.push(`/caracteres`);
      }, 6000);
    })();
  });

  return (
    <div className="login-container">
      <div className="logging-in">Logando</div>
      <div className="status">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
