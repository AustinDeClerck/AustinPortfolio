import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent,},
    { path: 'about', component: AboutComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'resume', component: ResumeComponent}
];
