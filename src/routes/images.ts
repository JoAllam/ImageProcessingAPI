import express from 'express'
import fs from 'fs'
import path from 'path'
const images = express.Router();

images.get('/', (req, res) => {
    let imagesPath = path.resolve(__dirname, '../../myPictures');
    fs.readdir(imagesPath, (err, data) => {
        if(err) {
            console.error(err);
            res.status(500).send("Error with loading gallery");
        }
        else {
            res.json(data);
        }
    })
})

export default images