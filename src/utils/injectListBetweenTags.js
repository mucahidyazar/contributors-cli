export const injectListBetweenTags = (newContent) => {
  return function (previousContent) {
    const tagToLookFor = `<!-- CONTRIBUTORS-GENERATOR-LIST:`;
    const closingTag = "-->";
    const startOfOpeningTagIndex = previousContent.indexOf(
      `${tagToLookFor}START`
    );
    const endOfOpeningTagIndex = previousContent.indexOf(
      closingTag,
      startOfOpeningTagIndex
    );
    const startOfClosingTagIndex = previousContent.indexOf(
      `${tagToLookFor}END`
    );

    console.log({
      test1: previousContent.slice(0, endOfOpeningTagIndex + closingTag.length),
      test2: previousContent.slice(startOfClosingTagIndex),
    });

    return [
      previousContent.slice(0, endOfOpeningTagIndex + closingTag.length),
      "\n\n<!-- prettier-ignore-start -->",
      "\n<!-- markdownlint-disable -->\n",
      newContent,
      "\n<!-- markdownlint-restore -->",
      "\n<!-- prettier-ignore-end -->\n\n",
      previousContent.slice(startOfClosingTagIndex),
    ].join("");
  };
};
