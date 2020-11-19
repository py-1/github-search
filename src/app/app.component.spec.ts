import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { GithubApiService } from './services/github-api.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule
      ],
      providers: [
        GithubApiService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a search input value stored as inputValue', () => {
    const testInput = 'hello world';

    expect(component.inputValue).toBe('');
    component.inputValue = testInput;
    expect(component.inputValue).toBe(testInput);
  });

  it('should render a search bar', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.search-input')).toBeTruthy();
  });

});
