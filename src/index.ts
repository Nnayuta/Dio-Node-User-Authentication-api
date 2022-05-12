import express from 'express';
import jwtAuthenticationMiddleware from './middlewares/jwt-authenticationMiddleware';
import errorHandle from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRouter from './routes/status.route';
import userRoute from './routes/users.route';

const app = express()

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(statusRouter)
app.use(authorizationRoute)

app.use(jwtAuthenticationMiddleware)
app.use(userRoute)
// Configuração dos Handlers de Erro

app.use(errorHandle)

//Inicialização do servidor
app.listen(3000, () => {
    console.log("API rodando na porta 3000")
})

// A ordem de execução dos middlewares é importante
// Por isso, é importante que o middleware de autenticação seja executado antes do middleware de rotas