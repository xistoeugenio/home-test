import { Request, Response } from "express";
import User from "../models/User";

// GET All USERS
export const getAll = async (request: Request, response: Response) => {
  const { q } = request.query;

  if (q) {
    // Build the search query
    const searchQuery = {
      $or: [
        { name: { $regex: q, $options: 'i' } },
        { city: { $regex: q, $options: 'i' } },
        { country: { $regex: q, $options: 'i' } },
        { favorite_sport: { $regex: q, $options: 'i' } },
      ],
    };

    // Find users matching the search query
    const users = await User.find(searchQuery);

    return response.status(200).json(users);
  } else {
    // If no search query provided, return all users
    const users = await User.find();
    return response.status(200).json(users);
  }
};
