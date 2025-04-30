import express from 'express'
import multer from 'multer'
const upload = multer({dest: 'myPictures/'});

let uploadPage = express.Router()

uploadPage.post('/', upload.single('anime'), (req, res, next) => {
    let file = req.file;
    console.log(file);
    res.send("File Uploaded Successfully!");
    next();
})

export default uploadPage