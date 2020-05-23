// Only one item MUST have the "default: true" key

module.exports = {
  es: {
    default: true,
    path: `es`,
    locale: `es-ES`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `es`,
    ogLanguage: `es_ES`,
    defaultTitle: `COVID-19 ParcBit`,
    defaultDescription: `Medidas frente a la COVID-19 en el ParcBit`,
  },
  ca: {
    path: `ca`,
    locale: `ca-ES`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `ca`,
    ogLanguage: `ca_ES`,
    defaultTitle: `COVID-19 ParcBit`,
    defaultDescription: `Mesures front la COVID-19 al ParcBit`,
  },
  en: {
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `COVID-19 ParcBit`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
}
