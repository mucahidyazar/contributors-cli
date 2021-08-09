import { role } from '../data';
import contributorsJson from '../contributors.json';
import { IContributor } from '../interfaces';

export const getContributorListLine = (contributor: IContributor): string => {
  let roles = '';
  let socials = '';

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
  isSplitted: boolean | null = false,
  contributorsPar?: IContributor[],
) => {
  const coreContributorsContentArray: string[] = [];
  let allContributorsContentArray: string[] = [];

  const contributorsList: IContributor[] = contributorsPar || contributorsJson;
  contributorsList.forEach((contributor: IContributor) => {
    const line = getContributorListLine(contributor);
    if (isSplitted && contributor.coreMember) {
      coreContributorsContentArray.push(line);
      return;
    }
    if (isSplitted && !contributor.coreMember) {
      allContributorsContentArray.push(line);
      return;
    }

    coreContributorsContentArray.push(line);
  });

  if (isSplitted) {
    allContributorsContentArray = [
      '\n\n<!-- CONTRIBUTORS-GENERATOR-ALL-MEMBERS:START - Do not remove or modify this section -->',
      '\n### All Members',
      ...allContributorsContentArray,
      '<!-- CONTRIBUTORS-GENERATOR-ALL-MEMBERS:END -->',
    ];
  }
  const coreContributorsContent = [
    '<!-- CONTRIBUTORS-GENERATOR-CORE-MEMBERS:START - Do not remove or modify this section -->',
    '\n### Core Members',
    ...coreContributorsContentArray,
    '<!-- CONTRIBUTORS-GENERATOR-CORE-MEMBERS:END -->',
  ].join('\n');
  const allContributorsContent = allContributorsContentArray.join('\n');

  return coreContributorsContent + allContributorsContent;
};
