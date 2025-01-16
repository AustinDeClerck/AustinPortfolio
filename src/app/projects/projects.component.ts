import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/project';
import { ProjectsService } from '../_services/projects.service';
import { FormsModule } from '@angular/forms';
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { Tag } from '../_models/tag';
import { TagService } from '../_services/tag.service';
import { Category } from '../_models/category';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ ProjectCardComponent, FormsModule, CollapseDirective ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

    projects = {} as Project[];
    categories: (string | Category)[] = [];
    filterTags: Tag[] = [];

    isCollapsed: boolean = true;
    typescript: boolean = false;
    angular: boolean = false;
    filtering: boolean = false;
    
    constructor(private projectsService: ProjectsService, private tagService: TagService) {
    }

    ngOnInit(): void {
      this.projects = this.projectsService.GetProjects();
      this.categories = this.tagService.GetCategories();
    }

    Filter(event: any, tag: Tag) {
      if (this.filterTags.includes(tag)) {
        this.filterTags = this.filterTags.filter(x => x != tag);
      }
      
      else {
        this.filterTags.push(tag);
      }

      this.projects = this.projectsService.GetProjectsByFilter(this.filterTags);
    }

    GetTagsByCategory(category: string | Category) {
      return  this.tagService.GetTagsByCategory(category);
    }
}
