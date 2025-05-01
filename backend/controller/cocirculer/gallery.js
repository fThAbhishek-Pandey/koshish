import { GalleryModel } from "../../models/Gallary/gallerySchema.js";
import { cloudinaryUploadImage, cloudinaryRemoveMultipleImage } from "../../middleware/cloudimage/cloudinary.js";
const getAllGallery = async (req, res)=>{
    try {
        const data = await GalleryModel.find({})
        const sendData = data.map ((item)=>{
            const {_id, galleryTitle,date,thumbnail} = item
            return {_id, galleryTitle,date,thumbnail }
        })
        res.json({success:true, data:sendData, message:"All memories found"})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message});
    }
}
const AddGallery = async(req, res)=>{
    try {
        const {titles,descriptions,galleryTitle,galleryDescription,youtube,linkedin, googlePhoto,instagram,facebook} = req.body
        const imgFileArry = req.files
        console.log(req.body); // titles, descriptions, links, etc.
        console.log(req.files); 
        const imgArryURL = await Promise.all( imgFileArry.map( async (imgfile)=>{
           const  imgdata =  await cloudinaryUploadImage(imgfile);
            return imgdata.secure_url
        }));
        console.log("secure img url ",imgArryURL)
        let galleryImg = [];
        for(let i=0; i< titles.length; i++){
            galleryImg.push({
                tittle: titles[i],
                desc:descriptions[i],
                image:imgArryURL[i]

            })
        }
        console.log ("gallery img : ", galleryImg)
        const saveData = {Photo:galleryImg,date : Date.now() ,thumbnail: imgArryURL.at(-1) , galleryTitle,galleryDescription,youtube,linkedin, googlePhoto,instagram,facebook}
        console.log(saveData);
        const newGallery = await GalleryModel.create(saveData);
         await newGallery.save()
        return  res.json({success:true,  message:"Add Gallery Successfully"})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message});
    }
}
const UpdateGallery = async (req, res) => {
    try {
      const {
        galleryTitle,
        newTitles,
        galleryDescription,
        newDescriptions,
        youtube,
        linkedin,
        googlePhoto,
        instagram,
        facebook,
        thumbnailUrl,
        existing,
        existingImageUrls = [],
      } = req.body;
      
      const { id } = req.params;
      const newFiles = req.files || [];
      console.log("hello ",existing,newTitles);
      console.log("newfiles", newFiles)
      // Upload new images
      if(newFiles.length ==0) {
           await GalleryModel.findByIdAndUpdate(id, {
            galleryTitle,
            galleryDescription,
            youtube,
            linkedin,
            googlePhoto,
            instagram,
            facebook,
          });
          return  res.json({ success: true, message: 'Gallery updated successfully' });
      }
      const newImageURLs = await Promise.all(
        newFiles.map(async (imgFile) => {
          const imgData = await cloudinaryUploadImage(imgFile);
          return imgData.secure_url;
        })
      );
     
      // Combine all images (existing + new)
      const allImageURLs = [...existingImageUrls, ...newImageURLs];
  
      // Build Photo array
      const galleryImg = [];
      for (let i = 0; newTitles != undefined && i < newTitles.length; i++) {
        galleryImg.push({
          tittle: newTitles[i],
          desc: newDescriptions[i],
          image: allImageURLs[i],
        });
      }
  
      // Get old gallery to clean up removed images
      const oldGallery = await GalleryModel.findById(id);
      const oldImages = oldGallery.Photo.map((img) => img.image);
        
      let removedImages = oldImages.filter(
        (url) => !existingImageUrls.includes(url)
      );
  
      let newThumbnail = false;
      if( (newTitles != undefined &&  newFiles.length == newTitles.length+1)||(newTitles == undefined && newFiles.length) ) {
        console.log("you have thumbnail",thumbnailUrl);
         newThumbnail= newImageURLs.at(-1);
         removedImages.push(thumbnailUrl)
      }
      // Remove old images from Cloudinary
      if (removedImages.length > 0) {
        await cloudinaryRemoveMultipleImage(removedImages);
      }
  
      // Prepare updated gallery data
      const updatedData = {
        Photo: newTitles != undefined ?galleryImg :oldGallery.Photo,
        thumbnail: newThumbnail? newThumbnail : thumbnailUrl ,
        galleryTitle,
        galleryDescription,
        youtube,
        linkedin,
        googlePhoto,
        instagram,
        facebook,
      };
  
      await GalleryModel.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
  
     return res.json({ success: true, message: 'Gallery updated successfully' });
    } catch (error) {
      console.error(error);
      res.json({ success: false, message: error.message });
    }
  };
  
const DeleteGallery = async(req, res)=>{
    try {
        const {id} = req.params
        const {Photo, thumbnail} = await GalleryModel.findById(id)
        let removeImg = [thumbnail]
        Photo.map((item)=> removeImg.push(item.image));
        if (removeImg.length > 0) {
          await cloudinaryRemoveMultipleImage(removeImg);
        }
         await GalleryModel.findByIdAndDelete(id);
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
        
        res.json({success:true, data, message:`gallery  found ${id}`})
     } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message});
     }
}
export {UpdateGallery,DeleteGallery ,AddGallery,getAllGallery,getGalleryById }