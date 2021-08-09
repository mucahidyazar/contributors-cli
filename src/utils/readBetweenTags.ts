export const readBetweenTags = (
  content: string,
  tag: string,
): string | null => {
  const startingTag = '<!-- ';
  const closingTag = ' -->';
  const tagToLookFor = startingTag + tag;
  const startOfOpeningTagIndex = content.indexOf(`${tagToLookFor}:START`);
  const endOfOpeningTagIndex = content.indexOf(
    closingTag,
    startOfOpeningTagIndex,
  );
  const startOfClosingTagIndex = content.indexOf(`${tagToLookFor}:END`);

  const hasTag = content.includes(tagToLookFor);
  if (!hasTag) return null;

  return content.slice(
    endOfOpeningTagIndex + closingTag.length,
    startOfClosingTagIndex,
  );
};

export default readBetweenTags;
