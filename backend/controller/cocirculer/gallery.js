import { GalleryModel } from "../../models/Gallary/gallerySchema.js";
const getAllGallery = async (req, res)=>{
    try {
        const data = await GalleryModel.find({})
        const sendData = data.map ((item)=>{
            const {name,date,desc,thumbnail} = item
            return { name,date,desc,thumbnail }
        })
        res.json({success:true, data:sendData, message:"All memories found"})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message});
    }
}
const AddGallery = async(req, res)=>{
    try {
        const {} = req.body

        
        const saveData = {}
        res.json({success:true,  message:"Add Gallery Successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message});
    }
}
const UpdateGallery = async(req, res)=>{
    try {
        const {} = req.body
        const saveData = {}
        res.json({success:true,  message:"update Gallery Successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message});
    }
}
const DeleteGallery = async(req, res)=>{
    try {
        const {id} = req.params
        
        
        res.json({success:true,  message:"delete Gallery successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message});
    }
}
const getGalleryById = async (req,res)=>{
     try {
        const {id} = req.params
        const data = await GalleryModel.findById(id)
        const sendData = data.map ((item)=>{
            const {name,date,desc,thumbnail,Photo} = item
            return {
                name,date,desc,thumbnail,Photo
            }
        })
        res.json({success:true, data:sendData, message:`gallery  found ${id}`})
     } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message});
     }
}
export {UpdateGallery,DeleteGallery ,AddGallery,getAllGallery,getGalleryById }