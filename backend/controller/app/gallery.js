import { GalleryModel } from "../../models/Gallary/gallerySchema.js";
const getAllMemories = async (req, res)=>{
    try {
        const data = await GalleryModel.find({isNews:false})
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
const getAllNews = async(req, res)=>{
    try {
        const data = await GalleryModel.find({isNews:true})
        const sendData = data.map ((item)=>{
            const {name,date,desc,thumbnail} = item
            return {
                name,date,desc,thumbnail
            }
        })
        res.json({success:true, data:sendData, message:"All memories found"})
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
export {getAllMemories,getAllNews,getGalleryById }