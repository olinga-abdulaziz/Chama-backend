const mongoose=require('mongoose')


const dbConn=async ()=>{
    try {
        const conn=await mongoose.connect('mongodb://127.0.0.1:27017/recDb')
        console.log('connected to mongodb');
    } catch (err) {
        console.log(err);
    }
}

module.exports=dbConn
// mongodb+srv://abdulaziz:azizsk123@cluster0.paxoh.mongodb.net/chamDb?retryWrites=true&w=majority
// mongodb://127.0.0.1:27017/recDb