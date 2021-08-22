import React, { useEffect, useState } from "react";
import { useCardapio } from "./cardapio_context";

const ACRESCIMO = 1.5;
const MAX_CREME = 3;

function ItemCardapioTerciario({ i }) {
  const { setIngredientes2, cardapio, setAcrescimos, setCremes2 } = useCardapio();

  const [ingredientes, setIngredientes] = useState([]);
  const [cremes, setCremes] = useState([]);

  const cardapioTipo = (tipoC) => {
    return cardapio.filter((it) => it.tipo == tipoC);
  };

  useEffect(() => {
    setAcrescimos((ingredientes.length - i.maximo) * ACRESCIMO, i.nome);
  }, [ingredientes]);

  useEffect(() => {
  }, [setIngredientes2,setCremes2]);

  const isDisabled = id => {
    return (
      cremes.length > 2 && cremes.indexOf(id) === -1
    );
  };

  const onChangeCheck = (e, value) => {
    const ing = e
      ? [...ingredientes, value]
      : ingredientes.filter((item) => item !== value);
    setIngredientes(ing);
    setIngredientes2(ing,i.nome);
  };

  const onChangeCheck2 = (e, value) => {
      const crem = e
        ? [...cremes, value]
        : cremes.filter((item) => item !== value);
      setCremes(crem);
      setCremes2(crem,i.nome);
  }; 

  return (
    <div className="bg-roxo3  shadow-2xl rounded-lg overflow-hidden p-4 text-center ">
      <div className="">
        <h1 className="text-white font-bold text-2xl ">{i.nome}</h1>
      </div>

      <h1 className="text-white font-bold text-2xl ">Cremes</h1>
      <h6 className="text-white font-bold text-1xl ">
          Máximo de 3 cremes
        </h6>

      <div className="flex justify-center  flex-wrap text-base">
        {cardapioTipo("Cremes").map((i, indx) => (
          <div className=" mr-4 mb-2 text-white" key={indx}>
            <input
              className="bg-roxo3"
              type="checkbox"
              key={indx}
              name="A3-confirmation"
              defaultChecked={false}
              disabled={isDisabled(i.nome)}
              onChange={(e) => {
                onChangeCheck2(e.target.checked, i.nome);
              }}
            />
            <label className="select-none"> {i.nome}</label>
          </div>
        ))}
      </div>
      <p></p>
      <div className="">
      <h1 className="text-white font-bold text-2xl ">Coisinhas</h1>

        <h6 className="text-white font-bold text-1xl ">
          Máximo de {i.maximo} coisinhas (acréscimos de R$ {ACRESCIMO} por
          coisinhas)
        </h6>
        {i.ingredientes.length > 0 && (
          <h6 className="text-white font-bold text-1xl ">
            {i.ingredientes.length} Coisinhas: {i.ingredientes.join(", ")}.
          </h6>
        )}
        {i.acrescimo > 0 && (
          <h6 className="text-white font-bold text-1xl ">
            Acréscimo: R$ {i.acrescimo}
          </h6>
        )}
      </div>
      <h1 className="text-white font-bold text-xl ">Ingredientes</h1>
      <div className="flex justify-center  flex-wrap text-base">
        {cardapioTipo("Ingredientes Açai").map((i, indx) => (
          <div className=" mr-4 mb-2 text-white bg-roxo3" key={indx}>
            <input
              className="bg-roxo3 form-checkbox"
              type="checkbox"
              name="A3-confirmation"
              defaultChecked={false}
              key={indx}
              onChange={(e) => {
                onChangeCheck(e.target.checked, i.nome);
              }}
            />
            <label className="select-none"> {i.nome}</label>
          </div>
        ))}
      </div>

      <h1 className="text-white font-bold text-xl ">Coberturas</h1>

      <div className="flex justify-center  flex-wrap text-base">
        {cardapioTipo("Coberturas Açai").map((i, indx) => (
          <div className=" mr-4 mb-2 text-white" key={indx}>
            <input
              className="bg-roxo3"
              type="checkbox"
              key={indx}
              name="A3-confirmation"
              defaultChecked={false}
              onChange={(e) => {
                onChangeCheck(e.target.checked, i.nome);
              }}
            />
            <label className="select-none">              
              {i.nome} {"  "}
            </label>
          </div>
        ))}
      </div>

      <h1 className="text-white font-bold text-xl ">Frutas</h1>

      <div className="flex justify-center  flex-wrap text-base">
        {cardapioTipo("Frutas").map((i, indx) => (
          <div className=" mr-4 mb-2 text-white" key={indx}>
            <input
              className="bg-roxo3"
              type="checkbox"
              key={indx}
              name="A3-confirmation"
              defaultChecked={false}
              onChange={(e) => {
                onChangeCheck(e.target.checked, i.nome);
              }}
            />
            <label className="select-none"> {i.nome}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemCardapioTerciario;
