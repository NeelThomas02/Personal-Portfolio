import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { ProjectDetailComponent } from './features/projects/project-detail/project-detail.component';

export const routes: Routes = [
  // default: show HomeComponent at root URL
      { path: '',            component: HomeComponent },
      { path: 'about',       component: AboutComponent },
      { path: 'skills',      component: SkillsComponent },
      { path: 'experience',  component: ExperienceComponent },  // ← new
      { path: 'projects',    component: ProjectsComponent },
      { path: 'contact',     component: ContactComponent },
      { path: 'projects/:slug', component: ProjectDetailComponent },
      { path: '**', redirectTo: '' }
  // you can add more routes here later
];
