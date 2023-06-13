import { Request, Response } from "express";
import { csvToJson } from "../services/convertFile";


export const getUsers = async (request: Request, response: Response) => {
  const { file } = request;
  if (!file) {
    return response.status(400).json('Please select a file')
  }

  if (file.mimetype === 'text/csv') {
    csvToJson(file, response)
  } else {
    return response.status(422).json('This file should be in CSV format')
  }

};