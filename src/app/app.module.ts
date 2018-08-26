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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: 'path', component: AppComponent },
  {path: 'aboutMe', component: AboutMeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contactMe', component: ContactComponent}
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
    HeaderComponent,
    PortfolioComponent,
    SkillsComponent,
    ResumeComponent
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
