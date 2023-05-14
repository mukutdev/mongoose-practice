import { Request, Response } from "express";
import { addNewUserToDB, getUserById, getUsers } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
    const data = req.body 
  const user = await addNewUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUserFromDB = async (req: Request, res: Response) => {
  const user = await getUsers();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

export const getUserId = async (req: Request, res: Response) => {
    const {id} = req.params
  const user = await getUserById(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
