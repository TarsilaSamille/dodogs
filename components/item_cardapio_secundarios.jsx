import React, { useEffect, useState, useReducer } from "react";

function ItemCardapioSecundario({ i, change }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return state + 1;
      case "subtract":
        return state - 1;
      case "input":
        return action.num >= 0 && action.num;
      default:
        throw new Error("Unexpected action");
    }
  };

  const [item, setItem] = useState(i);
  const initialState = i.quantidade;
  const [total, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setItem({ ...i, quantidade: total });
    change(total, i);
  }, [total, i]);

  return (
    <>
      <div
        class="bg-roxo3 flex flex-col justify-between
 shadow-2xl rounded-lg overflow-hidden p-4 items-center text-center"
      >
        <div class="">
          <h1 class="text-white font-bold text-2xl ">{item.nome}</h1>
        </div>
          <div class="">
            <h1 class="text-white font-bold text-base my-auto">
              <span>Preço:  R$ {parseFloat(item.preco).toFixed(2)}</span>
              {total != 0 && (
                <span>
                  <br /> Total: R${" "}
                  {parseFloat(item.preco * item.quantidade).toFixed(2)}
                </span>
              )}
            </h1>
          </div>
          <div class="flex items-center text-base font-bold text-ml  uppercase rounded text-white">
            <button
              type="button"
              onClick={
                total > 0
                  ? () => dispatch({ type: "subtract" })
                  : () => dispatch({ type: "input", num: 0 })
              }
              class="bg-roxo2 w-10 border-l border-t border-b 
                 font-medium rounded-l-md hover:bg-roxo4 py-2"
            >
              -
            </button>
            <input
              type="number"
              class={
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
              class="bg-roxo2 w-10 border-t border-b border-r 
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
