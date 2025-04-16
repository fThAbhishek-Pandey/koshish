import { handleValidationError } from '../../middleware/errorHandler.js';
import {
  saveAnnouncementDB,
  updateAnnouncementDB,
  hideAnnouncementDB,
  getNewsAllDB,
  getNewsByIdDB,
} from '../../repositories/cocircular/announcement.js';
import {
  cloudinaryUploadImage,
  cloudinaryRemoveImage,
} from '../../middleware/cloudimage/cloudinary.js';
const CreateAnnouncement = async (req, res) => {
  try {
    console.log(req.body);
    const { announcement, date, heading } = req.body;
    if (!announcement || !date || !heading) {
      res.json({ success: false, message: 'fill all data' });
    }
    const imgfile = req.file;
    if (!imgfile) {
      return res.json({ success: false, message: 'please upload image' });
    }
    const imageData = await cloudinaryUploadImage(imgfile);
    console.log(
      'anouncement',
      announcement,
      date,
      heading,
      imageData.secure_url
    );
    await saveAnnouncementDB({
      announcement,
      date,
      heading,
      image: imageData.secure_url,
    });
    return res.status(200).json({
      success: true,
      message: 'Announcement Created!',
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const UpdateAnnouncement = async (req, res) => {
  try {
    console.log('this is update News', req.body);
    const { id } = req.params;
    console.log("this is update : ",id)
    const { announcement, imgurl, date, heading } = req.body;
    if (!announcement || !date || !heading) {
     return  res.json({ success: false, message: 'fill all news data' });
    }
    const imgfile = req.file;
    if (imgfile) {
      await cloudinaryRemoveImage(imgurl);
      const imageData = await cloudinaryUploadImage(imgfile);
      console.log(
        'anouncement',
        announcement,
        date,
        heading,
        imageData.secure_url
      );
      await updateAnnouncementDB(id, {
        announcement,
        date,
        heading,
        image: imageData.secure_url,
      });
    } else {
      await updateAnnouncementDB(id, { announcement, date, heading });
    }

    return res.status(200).json({
      success: true,
      message: 'Announcement update successfully!',
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const hideAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    await hideAnnouncementDB(id);
    res.json({ success: true, message: 'hide successfully' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getNewsByIdDB(id);
    res.json({ success: true, data, message: `find news ${id}` });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const getNewsAll = async (req, res) => {
  try {
    const data = await getNewsAllDB();
    console.log('after colling db ', data);
    res.json({ success: true, data, message: `find All news` });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export {
  CreateAnnouncement,
  UpdateAnnouncement,
  hideAnnouncement,
  getNewsById,
  getNewsAll,
};
