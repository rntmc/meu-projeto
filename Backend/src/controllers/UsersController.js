  /**
   * Metodos:
   * index - GET para listar varios registros
   * show - GET para exibir um registro especifico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * delete - DELETE para remover um registro
   */

const { hash, compare } = require("bcryptjs")// Hash: funcao que vai gerar a criptografia. Compare: assegurar logica de mudanca de senha
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite")

class UsersController { //a classe permite que dentro dela possamos ter/acessar varias funcoes
  async create(request, response) {
    const {name, email, password} = request.body; 

    const database = await sqliteConnection();
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email]) //indica que queremos substituir o ? por email (para nao ter repetido)
  
    if(checkUserExist) {
      throw new AppError("Este email ja esta em uso")
    }

    const hashedPassword = await hash(password, 8) //criptogradar a senha e fator de complexidade = 8. Precisa do Await pois Hash eh uma promise

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
    
    return response.status(201).json();
  }

  async update(request, response) {
    const {name, email, password, old_password} = request.body;
    const user_id = request.user.id;

    const database = await sqliteConnection();
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

    if(!user){
      throw new AppError("Usuario nao encontrado");
    }

    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) { // email cadastrada com outro usuario de id diferente
      throw new AppError("Este email ja esta em uso.");
    }

    user.name = name ?? user.name; //se existir conteudo no user.name usaremos o que ja tinha. Evitar que dados sejam apagados caso nao informado no Insomnia
    user.email = email ?? user.email;

    if(password && !old_password){
      throw new AppError("Voce precisa informar a senha antiga para definir a nova.");
    }

    if(password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if(!checkOldPassword) {
        throw new AppError("A senha antiga nao confere.");
      }
      user.password = await hash(password, 8);
    }


    await database.run(`
      UPDATE users SET 
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, user_id]
    );
  
    return response.json();
  }
}

module.exports = UsersController;