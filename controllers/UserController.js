const Usuario = require("../models/Usuarios");
const TipoReceita = require("../models/TipoReceitas");
const Carteira = require("../models/Carteiras");
const Categoria = require("../models/Categorias");
// const users = require("../database/Users.json");
const fs = require("fs");
const bcrypt = require("bcrypt");

module.exports = {
  async store(req, res) {
    let { nome, email, password } = req.body;

    const user = await Usuario.findOne({ where: { email } });

    if (user) {
      console.log("Já existe um usuário cadastrado com este email!");
      return res.render("crud-usuarios/user");
    }

    let senha = bcrypt.hashSync(password, 10);

    const usuario = await Usuario.create({ nome, email, senha });

    //Cria valores iniciais
    await Carteira.create({
      nome: "Pessoal",
      tipo: 2,
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });

    await Categoria.create({
      nome: "Mercado",
      tipo: 2,
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });
    await Categoria.create({
      nome: "Lazer",
      tipo: 2,
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });
    await Categoria.create({
      nome: "Roupas e Calçados",
      tipo: 2,
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });
    await Categoria.create({
      nome: "Pizzas e Lanches",
      tipo: 2,
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });
    await Categoria.create({
      nome: "Cuidados Pessoal",
      tipo: 2,
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });

    await TipoReceita.create({
      nome: "Salário",
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });
    TipoReceita.create({
      nome: "Férias",
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });
    TipoReceita.create({
      nome: "13 Salário",
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });
    TipoReceita.create({
      nome: "Presente",
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });
    TipoReceita.create({
      nome: "Outros",
      usuario_id: usuario.id,
      cor: "",
      icone: "",
    });

    const users = await Usuario.findAll();

    //Sesssion do usuário logado
    req.session.usuario = JSON.stringify(usuario);
    //Principal
    return res.redirect("/dashboard");
  },
  create: (req, res) => {
    //res.send("Chegou aqui!");
    res.render("crud-usuarios/user");
  },
  async list(req, res) {
    const users = await Usuario.findAll();

    res.render("crud-usuarios/userlist", { users });
  },
  async edit(req, res) {
    const id = req.params.id;

    const user = await Usuario.findByPk(id);

    res.render("crud-usuarios/useredit", { user: user });
  },
  update: (req, res) => {
    let { nome, email, password } = req.body;

    let img = `/img/${req.file.filename}`;

    let { id } = req.params;

    id = Number(id);

    let senha = bcrypt.hashSync(password, 10);

    const userIndex = users.findIndex((user) => user.id == id);

    users[userIndex].nome = nome;
    users[userIndex].email = email;
    users[userIndex].senha = senha;
    users[userIndex].img = img;

    fs.writeFileSync("database/Users.json", JSON.stringify(users));

    //res.redirect('/');
    res.render("crud-usuarios/userlist", { users });
  },
  delete: (req, res) => {
    // Capturar ID do usuário a ser removido
    let id = req.params.id;

    id = Number(id);

    //Encontrar posição no array
    let pos = users.findIndex((user) => user.id == id);

    //Remover user
    users.splice(pos, 1);

    //Salvar array do usuário no arquivo
    fs.writeFileSync("database/Users.json", JSON.stringify(users));

    //Redirecionar usuário
    res.render("crud-usuarios/userlist", { users });
  },
};
