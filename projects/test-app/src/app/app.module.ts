import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FtAutofocusModule } from 'projects/ngx-autofocus-directive/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FtAutofocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
