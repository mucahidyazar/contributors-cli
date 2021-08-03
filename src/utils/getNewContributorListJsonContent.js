import fs from "fs";
import { role } from "../data";

const contributorsJson = JSON.parse(
  fs.readFileSync("src/contributors.json", "utf8")
);

export const getNewContributorListJsonContent = () => {
  const contributorsListCleaned = contributorsJson.map((contributor) => {
    let roles = "";
    let socials = "";
    contributor.roles.forEach((roleTitle) => {
      roles += ` [${role[roleTitle].symbol}](${role[roleTitle].name})`;
    });
    contributor.socials.forEach((social) => {
      socials += ` [${social.symbol}](${social.url})`;
    });

    const line = `\n${roles} [${contributor.username}](${contributor.github}) - [📧](${contributor.mail}) ${contributor.mail} - ${socials} \n`;

    return line;
  });
  const contributorsListCleanedString = contributorsListCleaned.join("\n");

  return contributorsListCleanedString;
};
