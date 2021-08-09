import execa from 'execa';

export const getContributors = async () => {
  const response = await execa('git shortlog -sne --all');

  const contributorsFromGit = response.stdout;
  const contributorsList = contributorsFromGit
    .split('\n')
    .filter((contributor) => contributor !== '')
    .map((contributor) => {
      //* contributor example: '    39\tmucahidyazar <mucahidyazar@gmail.com>'
      const splitted = contributor.trim().split(' ');
      const username: string = splitted[0].trim().split('\t')[1];
      const commitCount: number = Number(splitted[0].trim().split('\t')[0]);
      const email: string = splitted[1];

      // TODO: the datas can pull from github API
      // NOT: github address can't be right I just guess it
      return {
        username,
        github: `https://github.com/${username}`,
        email,
        coreMember: commitCount > 9,
        roles: ['developer'],
      };
    });

  return contributorsList;
};

export default getContributors;
