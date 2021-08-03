import prompts from "prompts";
import chalk from "chalk";
import execa from "execa";
import fs from "fs";
import {
  getContributors,
  getNewContributorListContent,
  getNewContributorListJsonContent,
  injectListBetweenTags,
  writeToFile,
} from "../utils";
import { questions1, questions2, questions3 } from "../data";

export const contributorPrompt = async () => {
  const response1 = await prompts(questions1);
  const fileName = {
    contributors: "contributors.md",
    readme: "readme.md",
  };
  const previousContributorsMDContent = fs.readFileSync(
    fileName.contributors,
    "utf8"
  );
  const previousReadmeMDContent = fs.readFileSync(fileName.readme, "utf8");

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
    const contributors = await getContributors();
    const contributorsContent = getNewContributorListContent(contributors);

    if (response.newFile) {
      const injectedContent = injectListBetweenTags(contributorsContent)(
        previousContributorsMDContent
      );

      writeToFile(fileName.contributors, injectedContent);
    } else {
      const injectedContent = injectListBetweenTags(contributorsContent)(
        previousReadmeMDContent
      );

      writeToFile(fileName.readme, injectedContent);
    }
  } else if (response.request === "newContributorListFromJson") {
    const contributorsContent = getNewContributorListJsonContent();

    if (response.newFile) {
      const injectedContent = injectListBetweenTags(contributorsContent)(
        previousContributorsMDContent
      );

      writeToFile(fileName.contributors, injectedContent);
    } else {
      const injectedContent = injectListBetweenTags(contributorsContent)(
        previousReadmeMDContent
      );

      writeToFile(fileName.readme, injectedContent);
    }
  }

  return response;
};
