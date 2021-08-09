module.exports = {
  publicRuntimeConfig: {
    siteMetaData: {
      name: "Dodog's Cardapio",
      url:
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
      title: "Dodog's Cardapio",
      description: "Dodog's Cardapio",
      twitterHandle: "a",
      socialPreview: "/images/preview.png",
    },
  },
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
};
