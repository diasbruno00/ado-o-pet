import Usuario from "../model/usuario.js";
import UsuarioDao from "../database/usuarioDao.js";

export default class ControllerUsuario {
  constructor() {}

  async salvar(req, res) {
    try {
      const { nome, idade, sexo, cpf, email, telefone, estado, cidade } = req.body;

      console.log(nome)
      console.log(idade)
      console.log(sexo)
      console.log(cpf)
      console.log(email)
      console.log(telefone)
      console.log(estado)
      console.log(cidade)


      const usuario = new Usuario(nome,idade,sexo,cpf,email,telefone,estado,cidade);
      console.log(usuario)

      const usuarioSalvo = await UsuarioDao.create(usuario);
      console.log(usuarioSalvo)
    

      res.json(usuarioSalvo);
    } catch (error) {
        console.log(error);
        res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
    }
  }

  async recuperarPorId (req, res) {
    try {
        const {id} = req.params
       const usuario = await UsuarioDao.findById({_id: id})

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
    }

  }

  async recuperarTodos (req, res) {
    try {
       
       const usuario = await UsuarioDao.find()

        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
    }

  }



}
