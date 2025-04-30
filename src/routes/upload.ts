import express from 'express'
import multer from 'multer'
import path from 'path'

let uploadPage = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'myPictures/')
    },
    filename: (req, file, cb) => {
        let name = path.basename(file.originalname)
        cb(null, `${name}.jpg`)
    }
})

const upload = multer({storage: storage});

uploadPage.post('/', upload.single('anime'), (req, res, next) => {
    let file = req.file;
    console.log(file);
    res.send("File Uploaded Successfully!");
    next();
})


export default uploadPage