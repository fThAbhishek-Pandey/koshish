import CocicularModel from "../../models/Cocirculer/cocerculerProfile.js";

const changeCocercular = async (cocircularData) => {
    console.log("cocircularData",cocircularData);
    await CocicularModel.updateMany({isactive:true},{isactive:false})
    await CocicularModel.insertOne(cocircularData);
}

export default changeCocercular