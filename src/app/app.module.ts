import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PickerColorComponent } from './components/picker-color/picker-color.component';

@NgModule({
  declarations: [
    AppComponent,
    PickerColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
