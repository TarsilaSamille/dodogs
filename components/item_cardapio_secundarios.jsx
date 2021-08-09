import React, { useEffect, useState, useReducer } from "react";
import { useCardapio } from "./cardapio_context";

function ItemCardapioSecundario({ i }) {
  const { setQuantidade } = useCardapio();

 
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        setQuantidade(item.quantidade + 1, i);
        return state + 1;
      case "subtract":
        setQuantidade(item.quantidade - 1, i);
        return state - 1;
      case "input":
        if (action.num >= 0) setQuantidade(action.num, i);
        return action.num >= 0 && action.num;
      default:
        throw new Error("Unexpected action");
    }
  };

  const [item, setItem] = useState(i);
  const [total, dispatch] = useReducer(reducer,  i.quantidade);

  useEffect(() => {
    setItem({ ...i, quantidade: total });
  }, [total, i]);

  return (
    <>
      <div
        className="bg-roxo3 flex flex-col justify-between
 shadow-2xl rounded-lg overflow-hidden p-4 items-center text-center"
      >
        <div className="">
          <h1 className="text-white font-bold text-2xl ">{item.nome}</h1>
        </div>
          <div className="">
            <h1 className="text-white font-bold text-base my-auto">
              <span>Preço:  R$ {parseFloat(item.preco).toFixed(2)}</span>
              {total != 0 && (
                <span>
                  <br /> Total: R${" "}
                  {parseFloat(item.preco * item.quantidade).toFixed(2)}
                </span>
              )}
            </h1>
          </div>
          <div className="flex items-center text-base font-bold text-ml  uppercase rounded text-white">
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
    </>
  );
}

export default ItemCardapioSecundario;
