import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BreadcrumbsComponent } from './client/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './core/footer/footer.component';
import { SectionModule } from './client/section/section.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
