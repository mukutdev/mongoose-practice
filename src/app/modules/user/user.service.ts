import { IUser } from "./user.interface";
import User from "./user.model";

export const addNewUserToDB = async (payload : IUser) : Promise<IUser>=>{
    const user = new User(payload);
    await user.save()  
    console.log(user.getLocation())
    return user;
}


export const getUsers = async() : Promise<IUser[]> =>{
    const user = User.find()
    
    return user;
}

export const getUserById = async(payload : number | string) : Promise<IUser | null> =>{
    const user = User.findOne({id : payload} , {name : 1 , address : 1})
    return user;
}