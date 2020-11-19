import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesComponent } from './repositories.component';
import { buildMockGithubApiResponse } from '../tests.utils';

describe('RepositoriesComponent', () => {
  let component: RepositoriesComponent;
  let fixture: ComponentFixture<RepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepositoriesComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort by repositories by most stars to least stars', () => {
    const repos = buildMockGithubApiResponse('test-user', 'User');
    const expected = repos.map(r => r.stargazers_count).sort();

    expect(component.sortByStars(repos).map(r => r.stargazers_count)).toEqual(expected);
  });
});
