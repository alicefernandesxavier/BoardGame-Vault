import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


// importações locais
import authRoutes from "./routes/authRoutes";
import gameRoutes from "./routes/gameRoutes";

// Carrega variáveis de ambiente
dotenv.config();

// Carregando os arquivos de rotas

// Criando o objeto servidor
const app = express();


// Carregando os middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/auth", authRoutes);
app.use("/games", gameRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});