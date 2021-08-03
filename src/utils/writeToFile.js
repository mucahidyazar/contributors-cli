import fs from "fs";

export const writeToFile = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File successfully saved!");
    }
  });
};
