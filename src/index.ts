import express from 'express'

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    try {
        throw new Error("Server Error")
        res.status(200).send("App is working!")
    }
    catch (err) {
        res.status(500).send("Server Error")
    }
})

app.listen(port, () => {
    console.log(`Server is up on localhost port ${port}`);
})

export default app