const express = require("express");
const path = require("path");
const { readJSON, writeJSON } = require("../utils/jsonStore");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
const gamesFile = path.join(__dirname, "../data/games.json");

router.use(authMiddleware);

router.get("/", async (req, res) => {
  // TODO: ROTA DE LISTAGEM DE TODOS OS JOGOS
});

router.get("/:id", async (req, res) => {
 // TODO: ROTA DE VER DETALHES DE APENAS UM JOGO
});

router.post("/", async (req, res) => {
 // TODO: ROTA DE CRIAÇÃO DE UM NOVO JOGO
});

router.put("/:id", async (req, res) => {
  // TODO: ROTA PARA ATUALIZAR O JOGO
});

router.patch("/:id/status", async (req, res) => {
  // TODO: ROTA PARA ALTERAR O STATUS DO JOOGO
});

router.delete("/:id", async (req, res) => {
  // TODO: ROTA PARA APAGAR JOGO ESPECÍFICO
});

export default router;