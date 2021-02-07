import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { NumberFormatPipePipe } from './number-format-pipe.pipe';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NumberFormatPipePipe,
    MyCustomDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
