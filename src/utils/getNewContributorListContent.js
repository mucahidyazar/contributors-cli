export const getNewContributorListContent = (contributors) => {
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
  const contributorsListCleanedString = contributorsListCleaned.join("\n");

  return contributorsListCleanedString;
};
