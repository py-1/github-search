import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getOrgRepos(organization: string): Observable<any> {
    const requestParams = new HttpParams().set('access_token', environment.GITHUB_ACCESS_TOKEN);
    return this.http.get(this.getOrgRepoUrl(organization), { params: requestParams });
  }

  getUserRepos(username: string): Observable<any> {
    const requestParams = new HttpParams().set('access_token', environment.GITHUB_ACCESS_TOKEN);
    return this.http.get(this.getUserRepoUrl(username), { params: requestParams });
  }

  getOrgRepoUrl(organization: string): string {
    return `https://api.github.com/orgs/${organization}/repos`;
  }

  getUserRepoUrl(username): string {
    return `https://api.github.com/users/${username}/repos`;
  }
}
