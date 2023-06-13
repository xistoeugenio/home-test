import { Readable } from "stream"
import readline from "readline"

interface userType {
  name: string
  city: string
  country: string
  favorite_sport: string
}

export const csvToJson = async (csvFile: Express.Multer.File) => {


  const { buffer } = csvFile;
  const readableFile = new Readable()
  readableFile.push(buffer)
  readableFile.push(null)

  const productsLine = readline.createInterface({
    input: readableFile,
  })

  const products: userType[] = []

  for await (let line of productsLine) {
    if (line !== 'name,city,country,favorite_sport') {
      const productLineSplit = line.split(",");


      //this verify if the file provided have the same user fields
      if (productLineSplit.length !== 4) {
        return false
      }

      products.push({
        name: productLineSplit[0],
        city: productLineSplit[1],
        country: productLineSplit[2],
        favorite_sport: productLineSplit[3]
      })
    }
  }

  return products as userType[];
}