const express = require("express");
const routes = express();
const {
  listarConvidados,
  inserirConvidado,
} = require("../controller/convidados");

routes.get("/convidados", listarConvidados);
routes.post("/convidados", inserirConvidado);

module.exports = routes;
