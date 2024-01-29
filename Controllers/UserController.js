const UserModel=require('../Model/UserModel')
const UserTaskModel=require('../Model/TaskModel')
const bcrypt=require('bcrypt')


const RegisterUser=async(req,res)=>{
    try{
console.log("ready")
        const {name,age,email,password,phone}=req.body

      const ExistingEmail= await UserModel.findOne({email:email})
      if(ExistingEmail){
       return res.status(400).json({message:"Already Have An Account",success:false})
      }

      const SucurePassword= await  bcrypt.hash(password,10)
      console.log(SucurePassword)

      const Data=  new UserModel({
        name,
        age,
        email,
        password:SucurePassword,
        phone
      })
       await  Data.save()
       res.status(201).json({message:"successfully Registerd",success:true})
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