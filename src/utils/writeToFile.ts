/* eslint-disable no-console */
import fs from 'fs';

export const writeToFile = (fileName: string, content: string): void => {
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File successfully saved!');
    }
  });
};

export default writeToFile;
