import { role } from "../data";
import contributorsJson from "../contributors.json";

export const getContributorListLine = (contributor) => {
  let roles = "";
  let socials = "";
  console.log(contributor, 1);

  contributor?.roles?.forEach((roleTitle) => {
    roles += ` [${role[roleTitle].symbol}](${role[roleTitle].name})`;
  });
  contributor?.socials?.forEach((social) => {
    socials += ` [${social.symbol}](${social.url})`;
  });

  const line = `\n${roles} [${
    contributor.username
  }](${`https://www.github.com/${contributor.username}`}) - [📧](${
    contributor.email
  })${socials ? ` - ${socials}` : socials}\n`;

  return line;
};

export const getNewContributorListJsonContent = (
  isSplitted = false,
  contributorsPar
) => {
  let coreContributorsContentArray = [];
  let allContributorsContentArray = [];

  const contributorsList = contributorsPar ? contributorsPar : contributorsJson;
  contributorsList.forEach((contributor) => {
    const line = getContributorListLine(contributor);
    if (isSplitted && contributor.coreMember) {
      coreContributorsContentArray.push(line);
      return;
    } else if (isSplitted && !contributor.coreMember) {
      allContributorsContentArray.push(line);
      return;
    }

    coreContributorsContentArray.push(line);
  });

  if (isSplitted) {
    allContributorsContentArray = [
      "\n\n<!-- CONTRIBUTORS-GENERATOR-ALL-MEMBERS:START - Do not remove or modify this section -->",
      "\n### All Members",
      ...allContributorsContentArray,
      "<!-- CONTRIBUTORS-GENERATOR-ALL-MEMBERS:END -->",
    ];
  }
  const coreContributorsContent = [
    "<!-- CONTRIBUTORS-GENERATOR-CORE-MEMBERS:START - Do not remove or modify this section -->",
    "\n### Core Members",
    ...coreContributorsContentArray,
    "<!-- CONTRIBUTORS-GENERATOR-CORE-MEMBERS:END -->",
  ].join("\n");
  const allContributorsContent = allContributorsContentArray.join("\n");

  return coreContributorsContent + allContributorsContent;
};
