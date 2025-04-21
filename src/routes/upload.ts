import express from 'express'

let upload = express.Router()

upload.get('/', (req, res) => {
    res.send("Upload route is working!");
})

export default upload