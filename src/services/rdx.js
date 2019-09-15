import { createStore } from "redux";
import { apiMarvel } from "./api";

let store = createStore(reducers);
const authorization = localStorage.getItem("authorization");

function reducers(state = 0, action) {
  switch (action.type) {
    case "LISTCARACTERES":
      return listCaracteres();
    case "UPDATECARACTERES":
      return updateCaracteres(action.payload);
    case "SINCRONIZECARACTERES":
      return sincronize();
    default:
      return state;
  }
}

export const stateRdx = (type, payload) => {
  store.dispatch({ type, payload });
  return store.getState();
};

async function sincronize() {
  const response = await apiMarvel.get(`/characters${authorization}`);

  if (response.data.data.results.length > 0) {
    localStorage.setItem("data", {
      status: "",
      caracteres: []
    });

    const result = await response.data.data.results.map(value => {
      return {
        id: value.id,
        name: value.name,
        thumbnail: `${value.thumbnail.path}.${value.thumbnail.extension}`,
        description: value.description,
        series: value.series.items.map(value => value.name)
      };
    });

    await localStorage.setItem(
      "data",
      JSON.stringify({
        caracteres: result,
        status: response.data.status
      })
    );
  }

  return await JSON.parse(localStorage.getItem("data"));
}

async function listCaracteres() {
  return await JSON.parse(localStorage.getItem("data"));
}
async function updateCaracteres(obj) {
  localStorage.setItem("data", JSON.stringify({ 
    caracteres: obj,
    status: "Ok"
  }));
  
  return await JSON.parse(localStorage.getItem("data"));
}
