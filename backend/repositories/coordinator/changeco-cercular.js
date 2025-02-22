import CocicularModel from "../../models/Cocirculer/cocerculerProfile";

const changeCocercular = async (cocircularData) => {
    await CocicularModel.insertOne("cocircularData: ",cocircularData);
}

export default changeCocercular