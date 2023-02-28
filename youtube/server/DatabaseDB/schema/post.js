import mongoose from "mongoose"

const userdetail= new mongoose.Schema({


    name:{
        type:'string',
        required:true
    },
    
    email:{
        type:'string',
        required:true
    },
    
    phone:{
        type:'string',
        required:true
    },

})

const  userdetailmodel= new mongoose.model('userdetail',userdetail);

export default  userdetailmodel;