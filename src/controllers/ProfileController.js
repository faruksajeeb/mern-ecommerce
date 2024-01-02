const {StoreUserProfile,UpdateUserProfile, UserProfileDetails} = require("../services/UserService");


exports.ReadProfile=async (req,res)=>{
    let result=  await UserProfileDetails(req)
    return res.status(200).json(result)
},

exports.StoreUserProfile=async (req,res)=>{
    let result=  await StoreUserProfile(req)
    return res.status(200).json(result)
}

exports.UpdateUserProfile=async (req,res)=>{
    let result= await StoreUserProfile(req)
    return res.status(200).json(result)
}