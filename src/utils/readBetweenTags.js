export const readBetweenTags = (content, tag) => {
  const startingTag = "<!-- ";
  const closingTag = " -->";
  const tagToLookFor = startingTag + tag;
  const startOfOpeningTagIndex = content.indexOf(`${tagToLookFor}:START`);
  const endOfOpeningTagIndex = content.indexOf(
    closingTag,
    startOfOpeningTagIndex
  );
  const startOfClosingTagIndex = content.indexOf(`${tagToLookFor}:END`);

  const hasTag = content.includes(tagToLookFor);
  if (!hasTag) return null;

  return content.slice(
    endOfOpeningTagIndex + closingTag.length,
    startOfClosingTagIndex
  );
  console.log({
    content,
    startOfOpeningTagIndex,
    test2: `${tagToLookFor}:START`,
  });
  console.log();
  console.log(
    content
      .slice(endOfOpeningTagIndex + closingTag.length, startOfClosingTagIndex)
      .split("\n")
  );
  // const content = [
  //   hasBefore
  //     ? previousContent.slice(0, endOfOpeningTagIndex + closingTag.length)
  //     : tagToLookFor + "START " + closingTag,
  //   "\n\n<!-- prettier-ignore-start -->",
  //   "\n<!-- markdownlint-disable -->\n",
  //   newContent,
  //   "\n<!-- markdownlint-restore -->",
  //   "\n<!-- prettier-ignore-end -->\n\n",
  //   hasBefore
  //     ? previousContent.slice(startOfClosingTagIndex)
  //     : tagToLookFor + "END" + closingTag,
  //   ,
  // ].join("");

  // return content;
};
