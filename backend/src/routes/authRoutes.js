const express = require("express");
const path = require("path");

const router = express.Router();

const usersFile = path.join(__dirname, "../data/users.json");

router.post("/register", async (req, res) => {
    // TODO: Efetuar rota de cadastro de usuários
});

router.post("/login", async (req, res) => {
  // TODO: Efetuar rota para logar na aplicação
});


// OUTRAS ROTAS PODEM SURGIR DE ACORDO COM A NCESSIDADE DO PROJETO

export default router;