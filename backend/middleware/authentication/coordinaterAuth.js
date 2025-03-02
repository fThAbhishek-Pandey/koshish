import jwt from 'jsonwebtoken'
//  admin authentication middlewre
const authCoodinater = async (req,res,next)=>{
    //    console.log("i am authCoordinator token : ", req.body)
      try{
            const {authcooditoken} = req.headers;
            // console.log("req.headers : ",req.headers);
            // console.log("authCoordinatertoken",authcooditoken)
            if(!authcooditoken){
                return res.json({sucess:false,authcooditoken:`${authcooditoken}`, message:"Web token is Null or undefined"})
            }
            const tokenDecode= jwt.verify(authcooditoken, process.env.JWT_SECKRET)
            // console.log("tokenDecode",tokenDecode);
            if( tokenDecode !== process.env.COORDINATOR_USERNAME + process.env.COORDINATER_PASSWORD ){
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
export default authCoodinater;