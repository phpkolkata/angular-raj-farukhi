import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LogoComponent } from './header/logo/logo.component';
import { ClassDirectivesComponent } from './class-directives/class-directives.component';
import { ClassDatabindingComponent } from './class-databinding/class-databinding.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, LogoComponent, ClassDirectivesComponent, ClassDatabindingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
