import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubApiService } from './services/github-api.service';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [
    GithubApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
