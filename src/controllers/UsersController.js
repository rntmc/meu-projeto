
const {hash, compare} = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const { ThemeProvider } = require("styled-components");

class UsersController {
  async create(request, response) {
    const {name, email, password} = request.body;

    const database = await sqliteConnection();
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExist){
      throw new AppError("Este email ja esta em uso");
    }

    const hashedPassword = await hash(password, 8); //hash eh uma promise, portanto precisa do await

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

    return response.status(201).json();
  }

  async update(request, response) {
    const {name, email, password, old_password} = request.body;
    const {id} = request.params;
    
    const database = await sqliteConnection(); //conexao com BD
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    if(!user){
      throw new AppError("Usuario nao encontrado");
    }

    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
      throw new AppError("Este email ja esta em uso.");
    }

    user.name = name ?? user.name; // ?? nullish operator. Se n tiver nome, retorna o que tinha antes(pq somente user.name = name iria retornar vazio caso so alterasse a senha)
    user.email = email ?? user.email; //O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.

    if(password && !old_password){
      throw new AppError("Voce precisa informar a senha antiga para definir a nova senha")
    }

    if(password && old_password){
      const checkOldPassword = await compare(old_password, user.password);

      if(!checkOldPassword){
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
    [user.name, user.email, user.password, id])
  
    return response.json();
  }
}

module.exports = UsersController;