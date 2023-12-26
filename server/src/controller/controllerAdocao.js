import AdocaoDao from '../database/adocaoDao.js'
import PetDao from '../database/petDao.js';
import UsuarioDao from '../database/usuarioDao.js';

export default class ControllerAdocao {

    constructor(){

    }

    async salvar(req, res){
        try {

            const { idUsuario , idPet, informacoes} = req.body
          
            const dados = await AdocaoDao.create({
                usuario: idUsuario,
                pet: idPet,
                informacoes: informacoes,
                status: 'Em analise'
            })
     
            res.json({sucesso: 'Seu pedido esta em analise, aguarde o retorno no email !'})

        } catch (error) {
            console.log(error)
            res.json({erro: 'erro verifique com a equipe de TI'})
        }
    
    }

    async recuperarTodos(req, res){

        try {
            
            const lista = await AdocaoDao.find().populate('usuario').populate('pet')

            res.json(lista)
            
        } catch (error) {

            console.log(error)
            res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
            
        }
    
    }

    
  async excluirAdocaoPorId (req, res) {
    try {
      const {id} = req.params;
      const dados = await AdocaoDao.findById(id).populate('usuario').populate('pet')
      const petExcluido = await PetDao.findOneAndDelete({ _id: dados.pet._id });
      const excluirAdocao = await AdocaoDao.findByIdAndDelete({_id: dados._id})

      res.json({sucesso: `Adoção confirmada com sucesso, ${dados.usuario.nome} recebera um email com os proximos passos !`});
      
    } catch (error) {
      console.log(error);
      res.json({ erro: "algo deu errodo verifique com a equipe de TI" });
    }
  }
}