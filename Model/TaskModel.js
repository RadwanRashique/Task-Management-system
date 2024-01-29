const mongoose=require('mongoose')

const UserTaskSchema=mongoose.Schema({
    task:{
        type:String
    },
    userId:{
        type:String
    },

    date:{
        type:Date
    }
})

const TaskModel=mongoose.model('userTaskModel',UserTaskSchema)
module.exports=TaskModel