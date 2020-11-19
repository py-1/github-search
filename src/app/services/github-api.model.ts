// defined in the api response "owner" object
export type EntityType = 'Organization' | 'User';

export const BASE_URL = 'https://api.github.com';
const ORG_URL_PATH = 'orgs';
const USER_URL_PATH = 'users';

export function buildGithubApiUrl(name: string, type: EntityType) {
  return type === 'User' ? `${BASE_URL}/${USER_URL_PATH}/${name}/repos`
                         : `${BASE_URL}/${ORG_URL_PATH}/${name}/repos`;
}

