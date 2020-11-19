import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GithubApiService } from './github-api.service';
import { FAKE_TOKEN } from './../../environments/environment.test';

function buildMockGithubApiResponse(username: string, type: string) {
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

describe('GithubApiService', () => {
  let service: GithubApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(GithubApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve user repositories using an access token', () => {
    const sampleUser = 'test-username';
    const mockResponse = buildMockGithubApiResponse(sampleUser, 'User');

    service.getUserRepos(sampleUser).subscribe(repos => {
      expect(repos.length).toBe(2);
      expect(repos).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${service.getUserRepoUrl(sampleUser)}?access_token=${FAKE_TOKEN}`
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('access_token')).toBe(FAKE_TOKEN);
    req.flush(mockResponse);
  });

  it('should retrieve organization repositories using an access token', () => {
    const sampleOrg = 'github';
    const mockResponse = buildMockGithubApiResponse(sampleOrg, 'Organization');

    service.getOrgRepos(sampleOrg).subscribe(repos => {
      expect(repos.length).toBe(2);
      expect(repos).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(
      `${service.getOrgRepoUrl(sampleOrg)}?access_token=${FAKE_TOKEN}`
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('access_token')).toBe(FAKE_TOKEN);
    req.flush(mockResponse);
  });

});
