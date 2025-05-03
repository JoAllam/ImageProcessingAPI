import express from 'express'
import multer from 'multer'
import path from 'path'

let uploadPage = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'myPictures/')
    },
    filename: (req, file, cb) => {
        let name = path.basename(file.originalname, '.jpg')
        cb(null, `${name}.jpg`)
    }
})

const filter = (req, file, cb) => {
    if(path.extname(file.originalname) === '.jpg') {
        cb(null, true);
    }
    else {
        cb(new Error("Only JPG files are allowed"), false);
    }
}

const upload = multer({storage: storage, fileFilter: filter});

uploadPage.post('/', upload.single('anime'), (req, res, next) => {
    try {
        let file = req.file;
        console.log(file);
        if(!file) {
            console.error("No file was uploaded");
            res.status(400).send("No file was uploaded!");
        }
        res.send("File Uploaded Successfully!");
        next();
    }
    catch(err) {
        console.error(err)
    }
        
})
uploadPage.use((err, req, res, next) => {
    if(err.message === "Only JPG files are allowed") {
        return res.status(400).send("Only JPG files are allowed!");
    }
    else {
        return res.status(500).send("Something went wrong!");
    }
})



export default uploadPage