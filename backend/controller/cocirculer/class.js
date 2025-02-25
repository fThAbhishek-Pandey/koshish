
const classroom = () => {
    try {
    
    } catch (error) {
             console.log(error)
             res.json({success:true, message: error.message})
    }
}

export default classroom