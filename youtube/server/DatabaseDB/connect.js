import mongoose from "mongoose";

const connectDB=(url)=>{
   mongoose.set('strictQuery',true);
   try {
    mongoose.connect(url)
    .then(()=>{
        console.log('connected to Database successfully!')
       })
    
   } catch (error) {
       console.log('error connecting to Database');
   }
   
}
export default connectDB;