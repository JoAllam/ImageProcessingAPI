import express from 'express'
import sharp from 'sharp'
import multer from 'multer'
import path from 'path'
import fs from 'fs/promises'


let resize = express.Router()

let upload = multer({});

resize.post('/', upload.single('resize'), async (req, res, next) => {
    try {
        if(!req.file) {
            console.log(req.body)
            console.log(req.file)
            res.status(400).send("No File Uploaded");
            return;
        }
        const file = req.file;
        const width = req.body.width;
        const height = req.body.height;
        let oldFilePath = path.join(__dirname, '../../myPictures', file.originalname)
        if(path.basename(file.originalname, '.jpg').indexOf('resized')) {
            let start = path.basename(file.originalname, '.jpg').indexOf('resized');
            file.originalname = file.originalname.slice(0, start);
        }
        let newFilePath = path.join(__dirname, '../../myPictures', path.basename(file.originalname, '.jpg') + ` resized - ${width}x${height}.jpg`);

        await sharp(file.buffer) 
            .resize(JSON.parse(width), JSON.parse(height))
            .toFile(newFilePath);
        setTimeout(() => {
            fs.rm(oldFilePath)
        }, 1000)
        res.send("Image resized successfully");
    }
    catch(err) {
        console.error(err);
        res.send("Something went wrong!")
    }
    

})
export default resize