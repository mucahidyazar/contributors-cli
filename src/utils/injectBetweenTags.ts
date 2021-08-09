/* eslint-disable no-sparse-arrays */
export const injectBetweenTags = (
  newContent: string,
  previousContent: string,
  tag: string,
): string => {
  const tagToLookFor = `<!-- ${tag}:`;
  const closingTag = '-->';
  const startOfOpeningTagIndex = previousContent.indexOf(
    `${tagToLookFor}START`,
  );
  const endOfOpeningTagIndex = previousContent.indexOf(
    closingTag,
    startOfOpeningTagIndex,
  );
  const startOfClosingTagIndex = previousContent.indexOf(`${tagToLookFor}END`);

  const hasBefore = previousContent.includes(tagToLookFor);
  const content = [
    hasBefore
      ? previousContent.slice(0, endOfOpeningTagIndex + closingTag.length)
      : `${tagToLookFor}START ${closingTag}`,
    '\n\n<!-- prettier-ignore-start -->',
    '\n<!-- markdownlint-disable -->\n',
    newContent,
    '\n<!-- markdownlint-restore -->',
    '\n<!-- prettier-ignore-end -->\n\n',
    hasBefore
      ? previousContent.slice(startOfClosingTagIndex)
      : `${tagToLookFor}END ${closingTag}`,
  ].join('');

  return content;
};

export default injectBetweenTags;
