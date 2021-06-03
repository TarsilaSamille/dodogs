import getConfig from "next/config";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import Cardapio from "../components/cardapio";
import { getDatabaseEntries } from "../utils/notion";

const { publicRuntimeConfig } = getConfig();
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

  return (
    <Layout>
      <Cardapio itens={cardapio}/>
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
