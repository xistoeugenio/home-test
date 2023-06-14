import { Request, Response } from "express";
import { csvToJson } from "../services/convertFile";
import User from "../models/User";

// ADD NEW USERS 
export const addFile = async (request: Request, response: Response) => {
  const { file } = request;

  if (!file) {
    // If no file is provided, return an error response
    return response.status(400).json({ error: 'Please select a file' });
  }

  if (file.mimetype !== 'text/csv') {
    // If the file is not in CSV format, return an error response
    return response.status(422).json({ error: 'This file should be in CSV format' });
  }

  const usersJson = await csvToJson(file);

  if (usersJson === false) {
    // If the conversion to JSON fails or required fields are missing, return an error response
    return response.status(422).json({ error: 'Please include fields name, city, country, favorite_sport in your file' });
  }

  await Promise.all(usersJson.map(async (user) => {
    // Check if the user already exists in the database
    const existedUsers = await User.find({
      "$and": [
        { name: user.name },
        { city: user.city },
        { country: user.country },
        { favorite_sport: user.favorite_sport },
      ]
    });

    if (existedUsers.length === 0) {
      // If the user doesn't exist, create a new user and save it to the database
      const newUser = new User(user);
      await newUser.save();
    }
  }));

  return response.status(200).json({ message: 'File uploaded successfully' });
};
