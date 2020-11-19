import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { GithubApiService } from './github-api.service';
import { FAKE_TOKEN } from './../../environments/environment.test';
import { buildGithubApiUrl } from './github-api.model';
import { buildMockGithubApiResponse } from '../tests.utils';

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
      `${buildGithubApiUrl(sampleUser, 'User')}?access_token=${FAKE_TOKEN}`
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
      `${buildGithubApiUrl(sampleOrg, 'Organization')}?access_token=${FAKE_TOKEN}`
    );
    expect(req.request.method).toBe('GET');
    expect(req.request.params.get('access_token')).toBe(FAKE_TOKEN);
    req.flush(mockResponse);
  });

});
