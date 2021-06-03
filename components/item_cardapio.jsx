import React, { useEffect, useState, useReducer } from "react";

function ItemCardapioPricipal({ i, change }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        change(total + 1, i.nome);
        return state + 1;
      case "subtract":
        change(total - 1, i.nome);
        return state - 1;
      case "input":
        if (action.num >= 0) change(action.num, i.nome);
        return action.num >= 0 && action.num;
      default:
        throw new Error("Unexpected action");
    }
  };

  const [item, setItem] = useState(i);
  const [total, dispatch] = useReducer(reducer, i.quantidade);

  useEffect(() => {
    setItem({ ...item, quantidade: total });
    change(total, i);
  }, [total, i]);

  return (
    <>
      <div
        class="flex max-w-md bg-roxo3
 shadow-2xl rounded-lg overflow-hidden pr-4"
      >
        <div class="w-2/3 p-4 flex flex-col justify-between ">
          <h1 class="text-white font-bold text-2xl ">{item.nome}</h1>
          <p class="text-white text-sm">{item.ingredientes}</p>

          <div class="flex justify-between  items-end ">
            <h1 class="text-white font-bold text-base my-auto">
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
        <div class="w-1/3 flex items-center justify-end flex-col  mx-2">
          <div class="py-4 items-center">
            <img
              class="rounded-full m-auto "
              src={"images/sand/" + item.imagem + ".png"}
            />
          </div>
          <div class="flex  items-center text-base font-bold text-ml  pb-4 uppercase rounded text-white">
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
      </div>
    </>
  );
}

export default ItemCardapioPricipal;
