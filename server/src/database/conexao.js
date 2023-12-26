
import mongoose from 'mongoose';

const dbUser = 'brunodp'
const dbPassword = 'qPBZDlreqUh6rys0';
const dbName = 'adocaoPet'


const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@adocaopet.2g1tmi0.mongodb.net/${dbName}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    //mongodb+srv://${dbUser}:${dbPassword}@adocaopet.2g1tmi0.mongodb.net/${dbName}?retryWrites=true&w=majority

    console.log('Conectado ao MongoDB com sucesso');
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB:', error.message);
  }
};

connect();



export default connect