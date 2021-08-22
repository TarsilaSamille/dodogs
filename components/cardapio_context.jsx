import React, { useState, useMemo, useContext } from "react";

export const CardapioContext = React.createContext();

export function useCardapioContext() {
  const [cardapio, setCardapio] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [acais, setAcais] = useState([]);
  const [totalTamanho, setTotalTamanho] = useState(0);
  const [height, setHeight] = useState(0);

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

  const setIngredientes2 = (ing, nome) => {
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

  const setCremes2 = (cre, nome) => {
    setAcais(
      acais.map((a) =>
        a.nome == nome
          ? {
              ...a,
              cremes: a.cremes ? cre : a.cremes,
            }
          : a
      )
    );
  };

  const setAcrescimos = (acresc, nome) => {
    setAcais(
      acais.map((a) =>
        a.nome == nome
          ? {
              ...a,
              acrescimo: acresc,
            }
          : a
      )
    );
  };
  const cardapioContext = useMemo(
    () => ({
      cardapio,
      setCardapio,
      produtos,
      setProdutos,
      acais,
      setAcais,
      totalTamanho,
      setTotalTamanho,
      setQuantidade,
      setIngredientes2,
      setAcrescimos,
      height,
      setHeight,
      setCremes2
    }),
    [
      cardapio,
      setCardapio,
      produtos,
      setProdutos,
      acais,
      setAcais,
      totalTamanho,
      setTotalTamanho,
      setQuantidade,
      setIngredientes2,
      setAcrescimos,
      height,
      setHeight,
      setCremes2
    ]
  );
  return cardapioContext;
}

export function useCardapio() {
  return useContext(CardapioContext);
}
