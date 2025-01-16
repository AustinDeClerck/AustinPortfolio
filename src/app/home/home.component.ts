import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterLink, CarouselModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  featuredProject = {} as Project;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.featuredProject = this.projectsService.GetProjectById(0);
  }
}
