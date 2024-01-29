const UserModel=require('../Model/UserModel')
const UserTaskModel=require('../Model/TaskModel')


const RegisterUser=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error,"At RegisterUser")
        res.status(500).json({message:"Internal server Error",success:false})
    }
}

const UserLogin=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error,"At LoginUser ")
        res.status(500).json({message:"Internal server Error",success:false})
    }
}

const GetTaskData=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error,"At GetTaskData")
        res.status(500).json({message:"Internal server Error",success:false})
    }
}

const GetUserName=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error,"At GetUserName")
        res.status(500).json({message:'Internal server Error',success:false})
    }
}

const AddTask=async(req,res)=>{

    try{

    }
    catch(error){
        console.error(error," at AddTask")
        res.status(500).json({message:"Internal server Error",success:false})
    }
    
}

const EditTask=async(req,res)=>{
    try{
      
    }
    catch(error){
        console.error(error,"At EditTask")
        res.status(500).json({message:"Internal server Error",success:false})
    }
}

const  DeleteTask=async(req,res)=>{
    try{

    }
    catch(error){
        console.error(error,"At DeleteTask")
        res.status(500).json({message:"Internal server Error",success:false})
    }

}

module.exports={

    RegisterUser,
    UserLogin,
    GetUserName,
    GetTaskData,
    AddTask,
    EditTask,
    DeleteTask



}