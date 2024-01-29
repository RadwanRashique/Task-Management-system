const express=require('express')
const Userrouter=express.Router()
const UserController=require('../Controllers/UserController')
const UserAthenticate= require('../Middleware/UserAuthMiddleware')


Userrouter.post('/register',UserController.RegisterUser)
Userrouter.post('/login',UserController.UserLogin)
Userrouter.get('/userName',UserController.GetUserName)
Userrouter.get('/taskData',UserController.GetTaskData)
Userrouter.post('/addTask',UserAthenticate,UserController.AddTask)
Userrouter.put('/editTask',UserController.EditTask)
Userrouter.delete('/deleteTask',UserController.DeleteTask)


module.exports=Userrouter