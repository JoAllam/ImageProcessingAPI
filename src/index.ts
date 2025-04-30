import express from 'express'
import resize from './routes/resize'
import upload from './routes/upload'
import path from 'path'
import fs from 'fs'

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, '../front/index.html'), (err) => {
        if(err) {
            console.error(err);
        }
        else {
            console.log("HTML File sent successfully!");
        }
    });
})

app.use('/upload', upload)
app.use('/resize', resize)

app.listen(port, () => {
    console.log(`Server is up on localhost port ${port}`);
})

export default app