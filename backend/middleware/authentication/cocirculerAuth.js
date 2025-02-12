import jwt from 'jsonwebtoken'
//  admin authentication middlewre
const authCociculer = async (req,res,next)=>{
       console.log("i am authCociculer token : ", req.body)
      try{
            const {authCociculertoken} = req.headers;
            console.log("req : ",req.headers);
            if(!authCociculertoken){
                return res.json({sucess:false,adminToken:`${admintoken}`, message:"Web token is Null or undefined"})
            }
            const tokenDecode= jwt.verify(authCociculertoken, process.env.JWT_SECKRET)
            if( tokenDecode !== process.env.COCICULAR_USERNAME + process.env.COCICULAR_PASSWORD ){
                return res.json({sucess:false, message:"Not Authorized Login again"})
            }
            next();
      }
      catch(error){
         console.log(error);
         res.json({sucess: false, message: error.message})
      }
}
export default authCociculer;