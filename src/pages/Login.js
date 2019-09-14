import React, { useEffect } from "react";
import { stateRdx } from "../services/rdx";
import "./Login.scss";
import { ToastsContainer, ToastsStore } from "react-toasts";

export default function Login({ history }) {
  useEffect(() => {
    (async function load() {
      localStorage.setItem(
        "authorization",
        "?ts=claudi6292566&apikey=1b7c523c768d821d1316c733b16ce06c&hash=07d98960fc9ba7be1696eec45561873f"
      );

      stateRdx("SINCRONIZECARACTERES").then(value => {

        if (value.status.trim() === "Ok"){
          ToastsStore.success("Dados sincronizados com sucesso");
          setTimeout(() => {
            history.push(`/caracteres`);
          }, 5000);
        }else
          ToastsStore.error(
            "Dados não sincronizados, favor tente novamente"
          );
      });

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
      <ToastsContainer store={ToastsStore} />
    </div>
  );
}
