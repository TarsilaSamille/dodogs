import React, { useEffect, useState, useReducer } from "react";
import Acordiao from "./acordiao";
const returnNumber = (item) => item.preco;
function Total({ p, a }) {
  const [produtos, setProdutos] = useState(p);
  const [acais, setAcais] = useState(a);
  const [total, setTotal] = useState(0);

  const sumValues = (obj) => {
    obj = obj.map((o) => returnNumber(o));
    console.log(obj);
    return obj.reduce((a, b) => a + b);
  };

  useEffect(() => {
    setProdutos(p);
    setAcais(a);
    setTotal(p.length > 0 ? sumValues(p) : 0);
  }, [p, a, total]);

  useEffect(() => {}, [total, produtos, acais]);
  return (
    <>
      <div class="fixed bottom-0 right-0 mr-8 mb-8">
        <div class="bg-roxo3 shadow-md rounded-xl p-4 font-bold text-lg">
          <div class="flex-none lg:flex text-right text-base">
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex space-x-3 text-white">
                <div class="flex flex-col flex space-x-3 ">
                  {total > 0 && (
                    <div>
                      <Acordiao
                        tipo={1}
                        nome={"Produtos"}
                        objeto={
                          <div class="flex flex-col flex space-x-3 ">
                            {produtos.map((i, indx) => (
                              <div key={i.nome + i.quantidade + indx}>
                                {i.quantidade} {i.nome} = R${" "}
                                {parseFloat(i.preco).toFixed(2)}
                                <br />
                              </div>
                            ))}
                          </div>
                        }
                      />
                      <div class="flex items-center pb-1 border-t border-gray-200 "></div>
                      <div>
                        <p>Total = R$ {parseFloat(total).toFixed(2)}</p>
                      </div>
                    </div>
                  )}
                  <div>
                    <a
                      class=" bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                      target="_blank"
                      aria-label="like"
                      href={
                        "https://api.whatsapp.com/send?phone=5584988493569&text=" +
                        acais.map(
                          (i) => i.nome + " " + i.ingredientes + " | "
                        ) +
                        produtos.map(
                          (i) =>
                            i.quantidade +
                            " " +
                            i.nome +
                            " = R$" +
                            parseFloat(i.preco).toFixed(2) +
                            ","
                        ) +
                        ", total=" +
                        total
                      }
                    >
                      Pedir{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Total;
