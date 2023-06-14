import { Readable } from "stream";
import readline from "readline";

interface UserType {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
}

export const csvToJson = async (csvFile: Express.Multer.File) => {
  const { buffer } = csvFile;

  // Create a readable stream from the buffer
  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  // Create an interface to read the lines from the stream
  const productsLine = readline.createInterface({
    input: readableFile,
  });

  const products: UserType[] = [];

  for await (let line of productsLine) {
    if (line !== 'name,city,country,favorite_sport') {
      // Split the line into an array of values
      const productLineSplit = line.split(",");

      // Verify if the file provided has the same user fields
      if (productLineSplit.length !== 4) {
        return false;
      }

      // Create a user object from the line values
      products.push({
        name: productLineSplit[0],
        city: productLineSplit[1],
        country: productLineSplit[2],
        favorite_sport: productLineSplit[3],
      });
    }
  }

  return products as UserType[];
};
