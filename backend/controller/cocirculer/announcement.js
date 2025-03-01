import { handleValidationError } from "../../middleware/errorHandler.js";
import saveAnnouncementDB from "../../repositories/cocircular/announcement.js"; 
const announcement = async(req,res,next) => {
    try {
        console.log(req.body);
        const { announcement } = req.body;
        try {
            if (!announcement ) {
              handleValidationError("Please Fill Form!", 400);
        }
        await saveAnnouncementDB(announcement);
        res.status(200).json({
          success: true,
          message: "Announcement Created!",
        });
        } catch (err) {
          next(err);
        }
    } catch (error) {
             console.log(error)
             res.json({success:true, message: error.message})
    }
}

export default announcement