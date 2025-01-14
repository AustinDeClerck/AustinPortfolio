import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    tags: ['Angular', 'Typescript'],
    pictures: []
  }
}
