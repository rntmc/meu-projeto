const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError("JWT Token nao informado", 401);
  }

  const [, token] = authHeader.split(" ") //o token vem com "Bearer xxxxxx(token)", por isso separamos e pegamos o nr do token somente

  try {
    const {sub: user_id} = verify(token, authConfig.jwt.secret); //user_id eh um alias do sub

    console.log("User ID:", user_id); // Adiciona este log para depurar

    request.user = {
      id: Number(user_id) //como passamos o user_id para String, precisamos retornar para Number
    };

    return next();
  } catch {
    console.error("Error during authentication:", error.message); // Adiciona este log para depurar
    throw new AppError("JWT Token invalido", 401);
  }
}

module.exports = ensureAuthenticated;