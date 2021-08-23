import React, { useEffect, useState, useReducer } from "react";
import { useCardapio } from "./cardapio_context";

function ItemCardapioPricipal({ i, indice }) {

  const { setQuantidade } = useCardapio();

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        setQuantidade(item.quantidade + 1, item);
        return state + 1;
      case "subtract":
        setQuantidade(item.quantidade - 1, item);
        return state - 1;
      case "input":
        if (action.num >= 0) setQuantidade(action.num, item);
        return action.num >= 0 && action.num;
      default:
        throw new Error("Unexpected action");
    }
  };

  const [item, setItem] = useState(i);
  const [total, dispatch] = useReducer(reducer,item.quantidade);

  useEffect(() => {
    setItem({ ...item, quantidade: total });
    console.log(indice)
  }, [total]);

  return (
    <>
      <div
        className="max-w-md bg-roxo3  shadow-2xl rounded-lg overflow-hidden pr-4
        flex flex-col md:flex-row  justify-between items-center text-center md:text-left
        "
      >
        <div className="w-2/3 p-4 flex flex-col justify-between">
          <h1 className="text-white font-bold text-2xl ">{indice}.{item.nome}</h1>
          <p className="text-white text-sm  text-left">{item.ingredientes}</p>

          <div className="flex justify-between  items-end   text-left">
            <h1 className="text-white font-bold text-base my-auto">
              <span>Preço: R$ {parseFloat(item.preco).toFixed(2)}</span>
              {total != 0 && (
                <span>
                  <br /> Total: R${" "}
                  {parseFloat(item.preco * item.quantidade).toFixed(2)}
                </span>
              )}
            </h1>
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-end flex-col  mx-2">
          <div className="py-4 items-center">
            <img
              className="rounded-full m-auto "
              src={"images/sand/" + item.imagem + ".png"}
            />
          </div>
          <div className="flex  items-center text-base font-bold text-ml 
          pb-4 uppercase rounded text-white">
            <button
              type="button"
              onClick={
                total > 0
                  ? () => dispatch({ type: "subtract" })
                  : () => dispatch({ type: "input", num: 0 })
              }
              className="bg-roxo2 w-10 border-l border-t border-b 
                 font-medium rounded-l-md hover:bg-roxo4 py-2"
            >
              -
            </button>
            <input
              type="number"
              className={
                total > 9
                  ? "pl-2 bg-roxo2 w-12 border  font-medium hover:bg-roxo4 py-2"
                  : "px-4 bg-roxo2 w-12 border  font-medium hover:bg-roxo4 py-2"
              }
              onChange={(e) =>
                dispatch({ type: "input", num: Number(e.target.value) })
              }
              value={total}
              placeholder={"0"}
            />
            <button
              type="button"
              onClick={() => dispatch({ type: "add" })}
              className="bg-roxo2 w-10 border-t border-b border-r 
                 font-medium rounded-r-md  hover:bg-roxo4 py-2"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCardapioPricipal;
