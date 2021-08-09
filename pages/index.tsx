import React from "react";
import Layout from "../components/layout";
import Cardapio from "../components/cardapio";
import { getDatabaseEntries } from "../utils/notion";
import { CardapioContext, useCardapioContext } from "../components/cardapio_context";

const format = (itens) => {
  return itens.map((item) => {
    let i = item.properties;
    return {
      nome: i["Descrição"].title[0].plain_text,
      tipo: i.Tipo.select.name,
      ingredientes: i["Ingredientes"].rich_text[0]
        ? i["Ingredientes"].rich_text[0].plain_text
        : "",
      disponivel: i["Disponivel"].checkbox,
      preco: i["Valor"].formula.string,
      imagem:  i["Imagem"].rich_text[0]
      ? i["Imagem"].rich_text[0].plain_text
      : "",
      quantidade: 0,
    };
  });
};

export default function Home({ cardapio }) {
  cardapio = format(cardapio).filter( i => i.disponivel == true);
  const cardapioContext = useCardapioContext();
  return (
    <Layout>
      <CardapioContext.Provider value={cardapioContext}>
        <Cardapio itens={cardapio}/>
      </CardapioContext.Provider>
    </Layout>
  );
}
export async function getStaticProps() {
  const entries = await getDatabaseEntries();
  return {
    props: {
      cardapio: entries,
    },
    revalidate: 15,
  };
}
