import { Request, Response } from "express";
import { csvToJson } from "../services/convertFile";


export const getUsers = async (request: Request, response: Response) => {
  const { file } = request;
  if (!file) {
    return response.json({ message: 'please select a file' })
  }

  if (file.mimetype === 'text/csv') {
    csvToJson(file, response)
  } else {
    return response.json({ message: 'please select CSV file' })
  }

};