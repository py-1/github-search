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

  constructor(private githubApiService: GithubApiService) { }

  search() {
    const input = this.inputValue.trim();
    let method;

    if (this.entityType === 'Organization') {
      method = 'getOrgRepos';
    } else {
      method = 'getUserRepos';
    }

    this.githubApiService[method](input).subscribe(
      res => console.log(`response: ${JSON.stringify(res)}`),
      err => console.log(`error: ${JSON.stringify(err)}`)
    )
  }

}
