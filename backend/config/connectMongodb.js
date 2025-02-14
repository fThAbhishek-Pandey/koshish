// import mongoose from "mongoose";
// const ConnectDB = async ()=>{
//         console.log("i am called : ",process.env.MONGODB_URI);
//         mongoose.connection.on ('connected', ()=>console.log("Databse connected : "));
//         await mongoose.connect(`${process.env.MONGODB_URI}/koshish`)
// }
// export default ConnectDB
import mongoose from "mongoose";
main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log((err));
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/koshish");
}
export default main;