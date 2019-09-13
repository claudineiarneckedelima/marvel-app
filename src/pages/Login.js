import React, {useEffect} from "react";

export default function Login({ history }) {
  useEffect(() => {
    (async function load() {
      localStorage.setItem(
        "authorization",
        "?ts=claudi6292566&apikey=1b7c523c768d821d1316c733b16ce06c&hash=07d98960fc9ba7be1696eec45561873f"
      );

      setTimeout(() => {
        history.push(`/caracteres`);
      }, 3000);
    })();
  });

  return <div className="login-container">Logando ...</div>;
}
