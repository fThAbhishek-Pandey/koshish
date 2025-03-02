import jwt from 'jsonwebtoken'
const loginCoordinater = async (req,res)=>{
    // console.log(req);
    try {
     const {username, password} =  req.body;
     console.log("req.body : ",req.body);
    //  console.log("email and password : ",username, password);
    //  console.log("email and password : ",process.env.COORDINATOR_USERNAME, process.env.COORDINATER_PASSWORD );
     if(username=== process.env.COORDINATOR_USERNAME && password === process.env.COORDINATER_PASSWORD ){
           const token = jwt.sign (username+password,process.env.JWT_SECKRET) 

           res.json({success:true,cocirculertoken:`${token}`, message:"You are login"});
     }
else {
        console.log("Invalid cridencial")
       res.json({success:false,message:"Invalid cridencial" })
}
       
    } catch (error) {
       console.log(error)
       res.json({success:false, msg:`admin login ${error.message}`})
    }
}
export default loginCoordinater