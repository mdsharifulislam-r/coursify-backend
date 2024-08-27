import mongoose from "mongoose";


export async function ConnectDB() {
  if(mongoose.connections[0].readyState){
    return 
  }
  try{
    const User = process.env.MONGO_USER
    const PASS = process.env.MONGO_PASS
    const connection = await mongoose.connect(`mongodb+srv://${User}:${PASS}@cluster0.gk9hloq.mongodb.net/Coursify?retryWrites=true&w=majority`, 
      { 
        family:4,
        bufferCommands:false,
  
        
      })
    console.log(`Database connected on ${connection.connection.port}`);
    
  }catch(err){
    console.log(err);
    
  }
}
