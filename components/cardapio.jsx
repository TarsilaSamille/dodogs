import React, { useEffect, useState } from "react";
import ItemCardapioPricipal from "./item_cardapio";
import ItemCardapioSecundario from "./item_cardapio_secundarios";
import ItemCardapioTerciario from "./item_cardapio_terciarios";
import { useCardapio } from "./cardapio_context";
import Accordion from "./acordiao";
import Total from "./total";
import Footer from "./footer";

const formatAcai = (item, idx) => {
  return {
    nome: item.nome + " " + Number(idx + 1),
    ingredientes: [],
    maximo: item.ingredientes,
    acrescimo: 0,
    cremes:[]
  };
};
const formatProduto = (item) => {
  return {
    nome: item.nome,
    preco: item.quantidade * item.preco,
    quantidade: item.quantidade,
  };
};
function Cardapio({ itens }) {
  const { cardapio, setCardapio, acais, setAcais, setProdutos, height } =
    useCardapio();

  const cardapioTipo = (tipoC) => {
    return cardapio.filter((i) => i.tipo == tipoC)
    .sort((a,b) => a.preco < b.preco ? -1 : 1);
  };

  useEffect(() => {
    let pedidosAcai = [];
    cardapioTipo("Açai Tamanho")
      .filter((i) => i.quantidade > 0)
      .map((tamanho) => {
        for (var i = 0; i < tamanho.quantidade; i++) {
          let ac = formatAcai(tamanho, i);
          let ex = acais.filter((a) => a.nome === ac.nome)[0];
          pedidosAcai.push(ex ? ex : ac);
        }
      });
    setAcais(pedidosAcai);
    let produtosList = cardapio
      .filter((i) => i.quantidade > 0)
      .map((i) => {
        return formatProduto(i);
      });
    setProdutos(produtosList);
  }, [cardapio]);

  useEffect(() => {
    setCardapio(itens);
  }, []);

  return (
    <>
      <div>
        <div className="bg-roxo4 p-16 font-mono ">
          <h1 className="text-white 
           font-bold pl-9 text-5xl
            md:text-1xl text-center pt-5">
            Cardápio
          </h1>
          <Accordion
            heading={"1.Dodog's"}
            content={
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {cardapioTipo("Dodog's")
                .map((i, indx) => (
                  <ItemCardapioPricipal i={i} key={indx + i.nome} />
                ))}
              </div>
            }
          />
          <Accordion
            heading={"2.Sanduiche"}
            content={
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {cardapioTipo("Sanduiche")
                .map((i, indx) => (
                  <ItemCardapioPricipal i={i} key={indx + i.nome} />
                ))}
              </div>
            }
          />{" "}
          <Accordion
            heading={"3.X-Algo"}
            content={
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {cardapioTipo("X-Algo")
                .map((i, indx) => (
                  <ItemCardapioPricipal i={i} key={indx + i.nome} />
                ))}{" "}
              </div>
            }
          />
          <Accordion
            heading={"4.Batata Frita"}
            content={
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  pt-6 gap-8">
                {cardapioTipo("Batata Frita").map((i, indx) => (
                  <ItemCardapioSecundario i={i} key={indx + i.nome} />
                ))}
              </div>
            }
          />
          <h1 className="text-white font-bold pl-9 text-5xl pt-9 text-center">
            Bebidas
          </h1>
          <Accordion
            heading={"1. Refrigerante"}
            content={
              <div>
                <h1 className="text-white font-bold pl-12 text-2xl pt-8">
                  1.1. Refrigerante Lata
                </h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-8">
                  {cardapioTipo("Refrigerante Lata").map((i, indx) => (
                    <ItemCardapioSecundario i={i} key={indx + i.nome} />
                  ))}
                </div>
                <h1 className="text-white font-bold pl-12 text-2xl pt-8">
                  1.2. Refrigerante 1 Litro
                </h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-8">
                  {cardapioTipo("Refrigerante  1 Litro").map((i, indx) => (
                    <ItemCardapioSecundario i={i} key={indx + i.nome} />
                  ))}
                </div>
              </div>
            }
          />
          <Accordion
            heading={"2. Sucos e Vitaminas"}
            content={
              <div>
                <h1 className="text-white font-bold pl-12 text-2xl pt-4">
                  2.1. Na Agua
                </h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-6 gap-8">
                  {cardapioTipo("Sucos e Vitaminas")
                    .filter((i) => i.ingredientes == "Na Agua")
                    .map((i, indx) => (
                      <ItemCardapioSecundario i={i} key={indx + i.nome} />
                    ))}
                </div>
                <h1 className="text-white font-bold pl-12 text-2xl pt-8">
                  2.2. No Leite
                </h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-6 gap-8">
                  {cardapioTipo("Sucos e Vitaminas")
                    .filter((i) => i.ingredientes == "No Leite")
                    .map((i, indx) => (
                      <ItemCardapioSecundario i={i} key={indx + i.nome} />
                    ))}
                </div>
                <h1 className="text-white font-bold pl-12 text-2xl pt-8">
                  2.3. Outros
                </h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-6 gap-8">
                  {cardapioTipo("Sucos e Vitaminas")
                   .filter((i) => i.ingredientes == "Outros")
                   .map((i, indx) => (
                    <ItemCardapioSecundario i={i} key={indx + i.nome} />
                  ))}
                </div>
              </div>
            }
          />
          <Accordion
            heading={"Açai"}
            content={
              <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  pt-6 gap-8">
                  {cardapioTipo("Açai Tamanho")
                                  .sort((a,b) => a.preco < b.preco ? -1 : 1)
                                  .map((i, indx) => (
                    <ItemCardapioSecundario i={i} key={indx + i.nome} />
                  ))}
                </div>
                {acais.length > 0 && (
                  <div>
                    <h1 className="text-white font-bold pl-12 text-2xl pt-8">
                      Selecione as Opções dos Açais selecionados acima
                    </h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
                      {acais.map((i, indx) => (
                        <ItemCardapioTerciario i={i} key={indx} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            }
          />
          <div style={{ height: height }}></div>
            <Footer/>
        </div>
        <Total />
      </div>
    </>
  );
}

export default Cardapio;
