import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { Experience } from './pages/experience/experience';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'projects/:id', component: ProjectDetail },
  { path: 'experience', component: Experience },
  { path: 'skills', component: Skills },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];