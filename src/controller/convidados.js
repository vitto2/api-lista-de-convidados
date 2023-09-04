const convidados = require("../bd");

const listarConvidados = (req, res) => {
  const { nome } = req.query;
  const findName = convidados.findIndex((convidado) => convidado == nome);

  if (!nome) {
    return res.json(convidados);
  }

  if (findName > -1) {
    return res.json({ mensagem: "Está na lista." });
  }

  if (findName == -1) {
    return res.json({ mensagem: "Não está na lista." });
  }
};

const inserirConvidado = (req, res) => {
  const { nome } = req.body;
  const includesName = convidados.includes(nome);

  if (nome.trim() == "") {
    return res.json({ mensagem: "Revise o campo NOME e tente novamente. " });
  }

  if (includesName) {
    return res.json({
      mensagem:
        "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.",
    });
  }

  convidados.push(nome);

  res.json({ mensagem: "Convidado adicionado." });
};

const removerConvidado = (req, res) => {
  const { nome } = req.params;
  const index = convidados.findIndex((convidado) => convidado == nome);

  if (nome.trim() == "") {
    return res.json({ mensagem: "Revise o campo NOME e tente novamente. " });
  }

  if (index !== -1) {
    convidados.splice(index, 1);
    return res.json({ mensagem: "Convidado removido." });
  }

  return res.json({
    mensagem:
      "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.",
  });
};
module.exports = {
  listarConvidados,
  inserirConvidado,
  removerConvidado,
};
