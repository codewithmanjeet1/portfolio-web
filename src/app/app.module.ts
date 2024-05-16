import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopModule } from './desktop/desktop.module';
import { HeaderModule } from './header/header.module';
import { ControlFormModule } from './control-form/control-form.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesktopModule,
    ControlFormModule,
    HeaderModule ,
    FormsModule,HttpClientModule  //import the module here just like forms module

  ],
  exports: [
FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
