import multer from 'multer';
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Ensure upload directory exists
const uploadPath = path.join(__dirname,'../../uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,uploadPath)
    },
    filename: function (req, file, cb) {
        try {
            if (file) {
                const timestamp = new Date().toISOString().replace(/:/g, "-");
                cb(null, `${timestamp}-${file.originalname}`);
            } else {
                cb(null, false);
            }
        } catch (error) {
            console.log("filename multer : ", error);
        }
     
    }
})
console.log ("storage", storage);
const  upload = multer({ 
  storage: storage, 
  fileFilter: function (req, file, cb) {
    // console.log("  filefilter end")
    try {
        if (file.mimetype.startsWith("image")) {
            cb(null, true);
        } else {
            cb(new Error("Unsupported file format"), false);
        }
    } catch (error) {
        console.log("fileFilter",error)
    }
    // console.log("  filefilter end")
},
// limits: { fileSize: 1024 * 1024 }, // 1 MB 

})

export default upload