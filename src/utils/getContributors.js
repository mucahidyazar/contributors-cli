import execa from "execa";

export const getContributors = async () => {
  const response = await execa("git shortlog -sne --all");

  return response.stdout;
};
