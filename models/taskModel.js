import mongoose from "mongoose";


const TaskSchema = new mongoose.Schema({
   task: String,
   taskStatus:{
    type:String,
    enum:['done','pending'],
    default:'pending',
   }

},
{
    timestamps:true
})

export default mongoose.model('Task', TaskSchema);