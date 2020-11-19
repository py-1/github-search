import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.sass']
})
export class RepositoriesComponent implements OnInit, OnChanges {
  @Input() repositories;

  displayedColumns: string[] = ['name', 'stars', 'visit']

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.repositories) {
      this.repositories = this.sortByStars(changes.repositories.currentValue);
    }
  }

  sortByStars(repositories: Array<any>): Array<any> {
    return repositories && repositories.sort((r1, r2) => r1.stargazers_count > r2.stargazers_count ? -1 : 1);
  }

}
