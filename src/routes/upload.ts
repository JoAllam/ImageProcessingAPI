import express from 'express'
import multer from 'multer'

let uploadPage = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'myPictures/')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}.jpg`)
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