import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDisplayComponent } from './project/project-display/project-display.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: 'path', component: AppComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutMeComponent,
    ProjectComponent,
    ProjectDisplayComponent,
    ProjectDetailComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
