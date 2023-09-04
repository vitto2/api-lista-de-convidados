const express = require("express");
const routes = express();
const {
  listarConvidados,
  inserirConvidado,
  removerConvidado
} = require("../controller/convidados");

routes.get("/convidados", listarConvidados);
routes.post("/convidados", inserirConvidado);
routes.delete("/convidados/:nome", removerConvidado)

module.exports = routes;
