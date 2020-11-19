import { Component } from '@angular/core';

import { GithubApiService } from './services/github-api.service';
import { EntityType } from './services/github-api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  inputValue = '';
  entityType: EntityType = 'Organization';
  entityTypes: Array<EntityType> = ['Organization', 'User'];
  repositories: Array<any>;

  constructor(private githubApiService: GithubApiService) { }

  search(): void {
    const input = this.inputValue.trim();
    let method;

    if (this.entityType === 'Organization') {
      method = 'getOrgRepos';
    } else {
      method = 'getUserRepos';
    }

    this.githubApiService[method](input).subscribe(
      res => {
        this.repositories = res;
      },
      err => {
        console.log(`error: ${JSON.stringify(err)}`);
        this.repositories = [];
      }
    )
  }

}
