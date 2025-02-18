import jwt from 'jsonwebtoken'
//  admin authentication middlewre
const authCociculer = async (req,res,next)=>{
       console.log("i am authCociculer token : ", req.body)
      try{
            const {authcociculertoken} = req.headers;
            console.log("req : ",req.headers);
            console.log("authCociculertoken",authcociculertoken)
            if(!authcociculertoken){
                return res.json({sucess:false,authcociculertoken:`${authcociculertoken}`, message:"Web token is Null or undefined"})
            }
            const tokenDecode= jwt.verify(authcociculertoken, process.env.JWT_SECKRET)
            console.log("tokenDecode",tokenDecode);
            if( tokenDecode !== process.env.COCICULAR_USERNAME + process.env.COCICULAR_PASSWORD ){
                return res.json({sucess:false, message:"Not Authorized Login again"})
            }
            // return res.json({success: true, message:"you are login" })
            next();
      }
      catch(error){
         console.log(error);
         res.json({sucess: false, message: error.message})
      }
}
export default authCociculer;