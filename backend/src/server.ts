import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config()

const app = express()
    .use(cors())
    .use(express.json())



app.listen(
    process.env.PORT,
    () => console.log(`server running on port ${process.env.PORT}`)
)