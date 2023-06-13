import { Request, Response } from "express";
import { csvToJson } from "../services/convertFile";
import User from "../models/User";

//ADD NEW USERS 

export const addFile = async (request: Request, response: Response) => {
  const { file } = request;

  if (!file) {
    return response.status(400).json('Please select a file')
  }

  if (file.mimetype !== 'text/csv') {
    return response.status(422).json('This file should be in CSV format')
  }

  const usersJson = await csvToJson(file)

  if (usersJson === false) {
    return response.status(422).json('please your file should include fields name, city, country, favorite_sport')
  }


  usersJson.map(async (user) => {
    const existedUsers = await User.find({
      "$and": [
        { name: user.name },
        { city: user.city },
        { country: user.country },
        { favorite_sport: user.favorite_sport },
      ]
    })

    if (existedUsers.length === 0) {
      const newUser = new User(user)
      await newUser.save()
    }
  })


  return response.status(200).json('file upload succesfully')
};