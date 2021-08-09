import { ISocial } from './ISocial';

export interface IContributor {
  name?: string;
  username: string;
  website?: string;
  github?: string;
  avatar?: string;
  email: string;
  coreMember?: boolean;
  roles?: string[];
  contibutorTypes?: string[];
  socials?: ISocial[];
}
