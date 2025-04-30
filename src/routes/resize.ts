import express from 'express'
import sharp from 'sharp'
import multer from 'multer'
import path from 'path'


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
        let newFilename = path.basename(file.originalname.toLowerCase(), '.jpg') + ` - ${width}x${height} resized.jpg`;
        await sharp(file.buffer) 
            .resize(JSON.parse(width), JSON.parse(height))
            .toFile(path.join('myPictures', newFilename));
        console.log("File resized successfully!");
        console.log(width, height)
        res.send("Image resized successfully");
    }
    catch(err) {
        console.error(err);
        res.send("Something went wrong!")
    }
    

})
export default resize