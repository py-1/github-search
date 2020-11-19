import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { buildGithubApiUrl } from './github-api.model';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getOrgRepos(organization: string): Observable<any> {
    const url = buildGithubApiUrl(organization, 'Organization');

    return this.http.get(url, this.buildRequestParams());
  }

  getUserRepos(username: string): Observable<any> {
    const url = buildGithubApiUrl(username, 'User');

    return this.http.get(url, this.buildRequestParams());
  }

  private buildRequestParams(): { params: HttpParams } {
    const params = new HttpParams().set('access_token', environment.GITHUB_ACCESS_TOKEN);

    return { params };
  }
}
