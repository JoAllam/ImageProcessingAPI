import express from 'express'
import resize from './routes/resize'
import upload from './routes/upload'

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    try {
        res.status(200).send("App is working!")
    }
    catch (err) {
        res.status(500).send("Server Error")
    }
})

app.use('/upload', upload)
app.use('/resize', resize)

app.listen(port, () => {
    console.log(`Server is up on localhost port ${port}`);
})

export default app