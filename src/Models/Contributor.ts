import { ISocial } from '../interfaces';

export class Contributor {
  id: number | string;

  name: string;

  username: string;

  website: string;

  github: string;

  avatar: string;

  email: string;

  coreMember: boolean;

  roles: string[];

  contributorTypes: string[];

  socials: ISocial[];

  constructor(
    id: string,
    name: string,
    username: string,
    website: string,
    github: string,
    avatar: string,
    email: string,
    coreMember: boolean,
    roles: string[],
    contributorTypes: string[],
    socials: ISocial[],
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.website = website;
    this.github = github;
    this.avatar = avatar;
    this.email = email;
    this.coreMember = coreMember;
    this.roles = roles;
    this.contributorTypes = contributorTypes;
    this.socials = socials;
  }
}

export default Contributor;
