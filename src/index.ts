import express from 'express';
import errorHandle from './middlewares/error-handler.middleware';
import statusRouter from './routes/status.route';
import userRoute from './routes/users.route';

const app = express()

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(userRoute)
app.use(statusRouter)

// Configuração dos Handlers de Erro

app.use(errorHandle)

//Inicialização do servidor
app.listen(3000, () => {
    console.log("API rodando na porta 3000")
})

