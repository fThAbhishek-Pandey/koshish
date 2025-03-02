import { homeEventsModel } from "../../models/App/eventsSchema.js";
const getevents = async(req,res) => {
 try {
    const data = await homeEventsModel.find({});
    console.log(data);
    res.json({success:true, message:"get all homeEvent", data})
 } catch (error) {
    console.log(error)
    res.json ({success:false, message:error.message});
 }


}

export default getevents