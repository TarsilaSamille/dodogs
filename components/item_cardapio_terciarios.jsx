import React, { useEffect, useState, useReducer } from "react";

function ItemCardapioTerciario({ i, opcoes, change }) {
  const [item, setItem] = useState(i);
  const [ingredientes, setIngredientes] = useState([]);

  useEffect(() => {
    setItem(item);
    change(ingredientes, i);
  }, [ingredientes, i]);

  const onChangeCheck = (e, value) => {
    setIngredientes(
      e
        ? [...ingredientes, value]
        : ingredientes.filter((item) => item !== value)
    );
  };
  return (
    <div class="bg-roxo3  shadow-2xl rounded-lg overflow-hidden p-4 text-center ">
      <div class="">
        <h1 class="text-white font-bold text-2xl ">{item.nome}</h1>
      </div>
      <h1 class="text-white font-bold text-xl ">Ingredientes</h1>
      <div class="flex justify-center  flex-wrap text-base">
        {opcoes["Ingredientes Açai"].map((i, indx) => (
          <div className=" mr-4 mb-2 text-white bg-roxo3">
            <input
              className="bg-roxo3"
              type="checkbox"
              id={i.nome}
              name="A3-confirmation"
              defaultChecked={false}
              onChange={(e) => {
                onChangeCheck(e.target.checked, i.nome);
              }}
            />
            <label htmlFor={i.nome} className="select-none">
              {i.nome}
            </label>
          </div>
        ))}
      </div>

      <h1 class="text-white font-bold text-xl ">Cremes</h1>

      <div class="flex justify-center  flex-wrap text-base">
        {opcoes["Cremes"].map((i, indx) => (
          <div className=" mr-4 mb-2 text-white">
            <input
              className="bg-roxo3"
              type="checkbox"
              id={i.nome}
              name="A3-confirmation"
              defaultChecked={false}
              onChange={(e) => {
                onChangeCheck(e.target.checked, i.nome);
              }}
            />
            <label htmlFor={i.nome} className="select-none">
              {i.nome}
            </label>
          </div>
        ))}
      </div>

      <h1 class="text-white font-bold text-xl ">Coberturas</h1>

      <div class="flex justify-center  flex-wrap text-base">
        {opcoes["Coberturas Açai"].map((i, indx) => (
          <div className=" mr-4 mb-2 text-white">
            <input
              className="bg-roxo3"
              type="checkbox"
              id={i.nome}
              name="A3-confirmation"
              defaultChecked={false}
              onChange={(e) => {
                onChangeCheck(e.target.checked, i.nome);
              }}
            />
            <label htmlFor={i.nome} className="select-none">
              {i.nome}
            </label>
          </div>
        ))}
      </div>

      <h1 class="text-white font-bold text-xl ">Cremes</h1>

      <div class="flex justify-center  flex-wrap text-base">
        {opcoes["Cremes"].map((i, indx) => (
          <div className=" mr-4 mb-2 text-white">
            <input
              className="bg-roxo3"
              type="checkbox"
              id={i.nome}
              name="A3-confirmation"
              defaultChecked={false}
              onChange={(e) => {
                onChangeCheck(e.target.checked, i.nome);
              }}
            />
            <label htmlFor={i.nome} className="select-none">
              {i.nome}
            </label>
          </div>
        ))}
      </div>

      <h1 class="text-white font-bold text-xl ">Frutas</h1>

      <div class="flex justify-center  flex-wrap text-base">
        {opcoes["Frutas"].map((i, indx) => (
          <div className=" mr-4 mb-2 text-white">
            <input
              className="bg-roxo3"
              type="checkbox"
              id={i.nome}
              name="A3-confirmation"
              defaultChecked={false}
              onChange={(e) => {
                onChangeCheck(e.target.checked, i.nome);
              }}
            />
            <label htmlFor={i.nome} className="select-none">
              {i.nome}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemCardapioTerciario;
