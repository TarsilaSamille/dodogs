import React, { useEffect, useState, useRef } from "react";
import Accordion from "./acordiao";
import { useCardapio } from "./cardapio_context";
const returnNumber = (item, bol) =>
  bol ? item.preco : item.acrescimo > 0 ? item.acrescimo : 0;

function Total() {
  const { produtos, acais, setHeight } = useCardapio();
  const ref = useRef(null);
  const [total, setTotal] = useState(0);

  const sumValues = (obj, bol) => {
    if (obj && obj.length !== 0) {
      obj = obj.map((o) => returnNumber(o, bol));
      return obj.reduce((a, b) => a + b);
    }
    return 0;
  };

  const rs = (v) => {
    return "R$ " + parseFloat(v).toFixed(2);
  };

  useEffect(() => {
    setTotal(sumValues(produtos, true) + sumValues(acais));
    setHeight(ref.current.clientHeight);
  }, [produtos, acais, total]);

  useEffect(() => {}, [total, produtos, acais]);
  return (
    <>
      <div className="fixed bottom-0 right-0 mr-8 mb-8 total">
        <div className="bg-roxo3 shadow-md rounded-xl p-4  text-lg">
          <div className="flex-none lg:flex text-right text-base">
            <div className="flex-auto ml-3 justify-evenly py-2">
              <div className="flex space-x-3 text-white">
                <div className="flex flex-col flex space-x-3 " ref={ref}>
                  {total > 0 && (
                    <Accordion
                      heading={"Pedido"}
                      tipo={true}
                      content={
                        <div>
                          <div className="flex flex-col flex space-x-3 ">
                            {produtos
                            .map((i, indx) => (
                              <div key={i.nome + i.quantidade + indx}>
                                {i.quantidade} {i.nome} = {rs(i.preco)}
                                <br />
                              </div>
                            ))}
                            {acais.map(
                              (i, indx) =>
                                i.acrescimo > 0 && (
                                  <div key={i.nome}>
                                    acréscimo do açai de {i.nome} ={" "}
                                    {rs(i.acrescimo)}
                                    <br />
                                  </div>
                                )
                            )}
                          </div>

                          <div className="flex items-center pb-1 border-t border-gray-200 "></div>
                          <div>
                            <p>Total = R$ {parseFloat(total).toFixed(2)}</p>
                          </div>
                        </div>
                      }
                    />
                  )}

                  <div>
                    <a
                      className=" bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                      target="_blank"
                      aria-label="like"
                      href={
                        "https://api.whatsapp.com/send?phone=5584988493569&text=" +
                        encodeURIComponent(
                          produtos
                          .map(
                            (i) =>
                              "\n" +
                              i.quantidade +
                              " " +
                              i.nome +
                              " = " +
                              rs(i.preco)
                          ) +
                            "\n----------------------------------------------------------------\n" +
                            acais.map(
                              (i) => "\n" + i.nome + "\nCremes: " + i.cremes + ".\nIngredientes: " + i.ingredientes 
                            ) +
                            "\n----------------------------------------------------------------\n" +
                            "\nTotal = " +
                            rs(total)
                        )
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
