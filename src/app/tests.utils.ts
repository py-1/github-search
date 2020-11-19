export function buildMockGithubApiResponse(username: string, type: string) {
  return [
    {
      id: 10,
      name: 'test-repo1',
      owner: {
        id: 5,
        login: username,
        type,
      },
      url: 'https://api.github.com/repos/octocat/test-repo1',
      stargazers_count: 5,
      watchers_count: 5
    },
    {
      id: 11,
      name: 'test-repo2',
      owner: {
        id: 5,
        login: username,
        type,
      },
      url: 'https://api.github.com/repos/octocat/test-repo2',
      stargazers_count: 12,
      watchers_count: 12
    }
  ];
}
