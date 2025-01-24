import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import langTranslateRoute from './routes/index'

config()

const app = express()
    .use(cors())
    .use(express.json())

app.get('/', (req, res) => {
    res.send({ message: "welcome to PollyGlot" })
});

app.use('/api', langTranslateRoute)

app.listen(
    process.env.PORT,
    () => console.log(`server running on port ${process.env.PORT}`)
)