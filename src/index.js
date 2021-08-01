import prompts from "prompts";
import chalk from "chalk";
import execa from "execa";
import fs from "fs";
import { injectListBetweenTags } from "./utils";
import { questions1, questions2, questions3 } from "./data";
import { role as rolesData } from "./data";

const startPrompt = async () => {
  const response1 = await prompts(questions1);

  let response2;
  let response3;
  if (response1.request === "newContributor") {
    response2 = await prompts(questions2);
  }
  if (response1.request === "newContributorList") {
    response3 = await prompts(questions3);
  }
  if (response1.request === "newContributorListFromJson") {
    response3 = await prompts(questions3);
  }

  const response = {
    ...response1,
    ...response2,
    ...response3,
  };

  if (response.request === "newContributor") {
  } else if (response.request === "newContributorList") {
    const getContributors = async () => {
      const response = await execa("git shortlog -sne --all");

      return response.stdout;
    };

    const contributors = await getContributors();

    const contributorsList = contributors.split("\n");
    const contributorsListClean = contributorsList.filter(
      (contributor) => contributor !== ""
    );
    const contributorsListCleaned = contributorsListClean.map((contributor) => {
      const splitted = contributor.trim().split(" ");
      const username = splitted[0].trim().split("\t")[1];
      const email = splitted[1];
      const line = `\n💻 🎨 [${username}](https://github.com/${username}) - [📧](${email}) ${email}\n`;
      return line;
    });

    if (response.newFile) {
      const previousContent = fs.readFileSync("contributors.md", "utf8");
      const contributorsListCleanedString = contributorsListCleaned.join("\n");
      const contributorsListCleanedStringWithNewLine = injectListBetweenTags(
        contributorsListCleanedString
      )(previousContent);

      const contributorsListCleanedStringWithNewLineToFilePath =
        "CONTRIBUTORS.md";

      const writeToFile = (
        contributorsListCleanedStringWithNewLineToFilePath,
        contributorsListCleanedStringWithNewLine
      ) => {
        fs.writeFile(
          contributorsListCleanedStringWithNewLineToFilePath,
          contributorsListCleanedStringWithNewLine,
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("File successfully saved!");
            }
          }
        );
      };

      writeToFile(
        contributorsListCleanedStringWithNewLineToFilePath,
        contributorsListCleanedStringWithNewLine
      );
    } else {
      const previousContent = fs.readFileSync("readme.md", "utf8");
      const contributorsListCleanedString = contributorsListCleaned.join("\n");
      const contributorsListCleanedStringWithNewLine = injectListBetweenTags(
        contributorsListCleanedString
      )(previousContent);
      const contributorsListCleanedStringWithNewLineToFilePath = "README.md";

      const writeToFile = (
        contributorsListCleanedStringWithNewLineToFilePath,
        contributorsListCleanedStringWithNewLine
      ) => {
        fs.writeFile(
          contributorsListCleanedStringWithNewLineToFilePath,
          contributorsListCleanedStringWithNewLine,
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("File successfully saved!");
            }
          }
        );
      };

      writeToFile(
        contributorsListCleanedStringWithNewLineToFilePath,
        contributorsListCleanedStringWithNewLine
      );
    }
  } else if (response.request === "newContributorListFromJson") {
    const contributorsJson = JSON.parse(
      fs.readFileSync("src/contributors.json", "utf8")
    );

    const contributorsContent = contributorsJson.map((contributor) => {
      let roles = "";
      let socials = "";
      contributor.roles.forEach((role) => {
        roles += ` [${rolesData[role].symbol}](${rolesData[role].name})`;
      });
      contributor.socials.forEach((social) => {
        socials += ` [${social.symbol}](${social.url})`;
      });

      const line = `\n${roles} [${contributor.username}](${contributor.github}) - [📧](${contributor.mail}) ${contributor.mail} - ${socials} \n`;
      return line;
    });

    let contributorsListCleanedStringWithNewLineToFilePath;

    if (response.newFile) {
      contributorsListCleanedStringWithNewLineToFilePath = "CONTRIBUTORS.md";
    } else {
      contributorsListCleanedStringWithNewLineToFilePath = "README.md";
    }

    const previousContent = fs.readFileSync("contributors.md", "utf8");
    const contributorsListCleanedString = contributorsContent.join("\n");
    const contributorsListCleanedStringWithNewLine = injectListBetweenTags(
      contributorsListCleanedString
    )(previousContent);

    const writeToFile = (
      contributorsListCleanedStringWithNewLineToFilePath,
      contributorsListCleanedStringWithNewLine
    ) => {
      fs.writeFile(
        contributorsListCleanedStringWithNewLineToFilePath,
        contributorsListCleanedStringWithNewLine,
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("File successfully saved!");
          }
        }
      );
    };

    writeToFile(
      contributorsListCleanedStringWithNewLineToFilePath,
      contributorsListCleanedStringWithNewLine
    );
  }

  return response;
};

startPrompt();
