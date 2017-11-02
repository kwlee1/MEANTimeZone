import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //newly added
import { HttpModule } from '@angular/http'; //newly added
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //newly added
    HttpModule //newly added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
