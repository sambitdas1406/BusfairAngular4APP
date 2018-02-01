import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatRadioModule,
   MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchCardComponent } from './search-card.component';
import { SearchResultComponent } from './search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCardComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
   MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
   MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
   MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
