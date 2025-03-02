import jwt from 'jsonwebtoken'
const loginCociculer = async (req,res)=>{
    try {
     const {username, password} =  req.body;
     console.log("req.body : ",req.body);
     console.log("username and password : ",username, password);
     console.log("username and password : ",process.env.COCICULAR_USERNAME, process.env.COCICULAR_PASSWORD );
     if(username === process.env.COCICULAR_USERNAME && password === process.env.COCICULAR_PASSWORD ){
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
export default loginCociculer