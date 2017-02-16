'use strict';

const daDK = require('./da-DK');
const deDE = require('./de-DE');
const enUS = require('./en-US');
const enES = require('./es-ES');
const frFR = require('./fr-FR');
const itIT = require('./it-IT');
const nlNL = require('./nl-NL');
const seSE = require('./se-SE');

var translations = {
  "da-DK": daDK,
  "de-DE": deDE,
  "en-US": enUS,
  "en-ES": enES,
  "fr-FR": frFR,
  "it-IT": itIT,
  "nl-NL": nlNL,
  "se-SE": seSE,
};

module.exports = exports = translations;
