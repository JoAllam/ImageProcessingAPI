import express from 'express'
import sharp from 'sharp'

let resize = express.Router()

resize.get('/', (req, res) => {
    res.send("resize route is working!");
})

export default resize