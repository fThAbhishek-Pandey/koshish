import mongoose from "mongoose";
const ConnectDB = async ()=>{
        console.log("i am called : ",process.env.MONGODB_URI);
        mongoose.connection.on ('connected', ()=>console.log("Databse connected : "));
        await mongoose.connect(`${process.env.MONGODB_URI}/doctorg`)
}
export default ConnectDB