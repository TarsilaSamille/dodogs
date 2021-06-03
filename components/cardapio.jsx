import React, { useEffect, useState } from "react";
import ItemCardapioPricipal from "./item_cardapio";
import ItemCardapioSecundario from "./item_cardapio_secundarios";
import ItemCardapioTerciario from "./item_cardapio_terciarios";
import Acordiao from "./acordiao";
import Total from "./total";

const formatAcai = (item, idx) => {
  return {
    nome: item.nome + " " + Number(idx + 1),
    ingredientes: [],
  };
};

const formatProduto = (item) => {
  return {
    nome: item.nome,
    preco: item.quantidade * item.preco,
    quantidade: item.quantidade,
  };
};
const groupBy = (arr, property) => {
  return arr.reduce((acc, cur) => {
    acc[cur[property]] = [...(acc[cur[property]] || []), cur];
    return acc;
  }, {});
};

function Cardapio({ itens }) {
  const [cardapio, setCardapio] = useState(itens);
  const [produtos, setProdutos] = useState([]);

  let cardapioPorTipo = groupBy(cardapio, "tipo");

  const [acais, setAcais] = useState([cardapioPorTipo["Açai Tamanho"]]);
 const [totalTamanho, setTotalTamanho] = useState(0);
  const setQuantidade = (valor, i) => {
    setCardapio(
      cardapio.map((item) =>
        item.nome == i.nome &&
        item.tipo == i.tipo &&
        item.ingredientes == i.ingredientes
          ? { ...item, quantidade: valor }
          : item
      )
    );
  };

  const setIngredientes = (ing, nome) => {
    setAcais(
      acais.map((a) =>
        a.nome == nome
          ? {
              ...a,
              ingredientes: a.ingredientes ? ing : a.ingrediente,
            }
          : a
      )
    );
  };

  useEffect(() => {
    setCardapio(cardapio);
    cardapioPorTipo = groupBy(cardapio, "tipo");
    let pedidosAcai = [];
    cardapioPorTipo["Açai Tamanho"]
      .filter((i) => i.quantidade > 0)
      .map((tamanho) => {
        for (var i = 0; i < tamanho.quantidade; i++) {
          pedidosAcai.push(formatAcai(tamanho, i));
        }
      });
    var produtosList = cardapio
      .filter((i) => i.quantidade > 0)
      .map((i) => {
        return formatProduto(i);
      });
    setProdutos(produtosList);
    setAcais(pedidosAcai);
  }, [cardapio]);
  useEffect(() => {

  }, [produtos]);

  return (
    <>
      {" "}
      <div>
        <div className="bg-roxo4 p-16 font-mono ">
          <h1 className="text-white font-bold pl-9 text-6xl text-center pt-5">
            Cardapio
          </h1>

          <Acordiao
            nome={"1. Dodog's"}
            objeto={
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {cardapio
                  .filter((i) => i.tipo == "Dodog's")
                  .map((i, indx) => (
                    <ItemCardapioPricipal
                      i={i}
                      key={indx + i.nome}
                      change={setQuantidade}
                    />
                  ))}
              </div>
            }
          />
          <Acordiao
            nome={"2. Sanduiches"}
            objeto={
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {cardapioPorTipo["Sanduiche"].map((i, indx) => (
                  <ItemCardapioPricipal
                    i={i}
                    key={indx + i.nome}
                    change={setQuantidade}
                  />
                ))}{" "}
              </div>
            }
          />

          <Acordiao
            nome={"3. X-Algo"}
            objeto={
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
                {cardapioPorTipo["X-Algo"].map((i, indx) => (
                  <ItemCardapioPricipal
                    i={i}
                    key={indx + i.nome}
                    change={setQuantidade}
                  />
                ))}{" "}
              </div>
            }
          />

          <Acordiao
            nome={"4. Batata Frita"}
            objeto={
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  pt-6 gap-8">
                {cardapioPorTipo["Batata Frita"].map((i, indx) => (
                  <ItemCardapioSecundario
                    i={i}
                    key={indx + i.nome}
                    change={setQuantidade}
                  />
                ))}
              </div>
            }
          />

          <h1 className="text-white font-bold pl-9 text-5xl pt-9 text-center">
            Bebidas
          </h1>

          <Acordiao
            nome={"1. Refrigerante"}
            objeto={
              <div>
                <Acordiao
                  nome={"1.1 Refrigerante Lata"}
                  objeto={
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  pt-6 gap-8">
                      {cardapioPorTipo["Refrigerante Lata"].map((i, indx) => (
                        <ItemCardapioSecundario
                          i={i}
                          key={indx + i.nome}
                          change={setQuantidade}
                        />
                      ))}
                    </div>
                  }
                />
                <Acordiao
                  nome={"1.2 Refrigerante 1 Litro"}
                  objeto={
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  pt-6 gap-8">
                      {cardapioPorTipo["Refrigerante  1 Litro"].map(
                        (i, indx) => (
                          <ItemCardapioSecundario
                            i={i}
                            key={indx + i.nome}
                            change={setQuantidade}
                          />
                        )
                      )}
                    </div>
                  }
                />
              </div>
            }
          />

          <h1 className="text-white font-bold pl-9 text-3xl pt-9">
            1. Refrigerante
          </h1>
          <h1 className="text-white font-bold pl-12 text-2xl pt-8">
            1.1. Refrigerante Lata
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-8">
            {cardapioPorTipo["Refrigerante Lata"].map((i, indx) => (
              <ItemCardapioSecundario
                i={i}
                key={indx + i.nome}
                change={setQuantidade}
              />
            ))}
          </div>
          <h1 className="text-white font-bold pl-12 text-2xl pt-8">
            1.2. Refrigerante 1 Litro
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-8">
            {cardapioPorTipo["Refrigerante  1 Litro"].map((i, indx) => (
              <ItemCardapioSecundario
                i={i}
                key={indx + i.nome}
                change={setQuantidade}
              />
            ))}
          </div>
          <h1 className="text-white font-bold pl-9 text-3xl pt-9">
            2. Sucos e Vitaminas
          </h1>
          <h1 className="text-white font-bold pl-12 text-2xl pt-4">
            2.1. Na Agua
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-6 gap-8">
            {cardapioPorTipo["Sucos e Vitaminas"]
              .filter((i) => i.ingredientes == "Na Agua")
              .map((i, indx) => (
                <ItemCardapioSecundario
                  i={i}
                  key={indx + i.nome}
                  change={setQuantidade}
                />
              ))}
          </div>
          <h1 className="text-white font-bold pl-12 text-2xl pt-8">
            2.2. No Leite
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-6 gap-8">
            {cardapioPorTipo["Sucos e Vitaminas"]
              .filter((i) => i.ingredientes == "No Leite")
              .map((i, indx) => (
                <ItemCardapioSecundario
                  i={i}
                  key={indx + i.nome}
                  change={setQuantidade}
                />
              ))}
          </div>
          <h1 className="text-white font-bold pl-12 text-2xl pt-8">
            2.3. Outros
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 pt-6 gap-8">
            {cardapioPorTipo["Sucos e Vitaminas"]
              .filter((i) => i.ingredientes == "")
              .map((i, indx) => (
                <ItemCardapioSecundario
                  i={i}
                  key={indx + i.nome}
                  change={setQuantidade}
                />
              ))}
          </div>

          <h1 className="text-white font-bold pl-9 text-4xl pt-9 text-center">
            Açai
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  pt-6 gap-8">
            {cardapioPorTipo["Açai Tamanho"].map((i, indx) => (
              <ItemCardapioSecundario
                i={i}
                key={indx + i.nome}
                change={setQuantidade}
              />
            ))}
          </div>

          {acais.length > 0 && (
            <h1 className="text-white font-bold pl-12 text-2xl pt-8">
              Selecione as Opções dos Açais selecionados acima
            </h1>
          )}
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
            {acais.map((i, indx) => (
              <ItemCardapioTerciario
                i={i}
                opcoes={cardapioPorTipo}
                change={setIngredientes}
              />
            ))}
          </div>
        </div>
                    <Total p={produtos} a={acais}/>

      </div>
    </>
  );
}

export default Cardapio;
