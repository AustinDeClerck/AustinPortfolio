import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "VanParksVision App", pictures: ["../../assets/Image1.png","../../assets/Image2.png","../../assets/Image3.png"], projectLink: "//www.github.com", summary: "Fullstack promotional park app created using React Native, Ruby, and Node.js", description: "VanParksVision is a mobile app that uses augmented reality to reimagine upcoming Vancouver, Washington parks. The app showcases the changes coming to Vancouver parks and provides information helpful to guests, such as hours, amenities, and accessibility features. Designed to be used by all ages and abilities, the app is interactive, informative, and innovative.", tags: [Tag.REACT, Tag.PYTHON, Tag.RUBY]},
    {id: 1, name: "Water Management Services", pictures: ["watermanagement1.jpg", "watermanagement2.jpg", "watermanagement3.jpg", ], projectLink: "", summary: "Managerial consulting tools to help boost efficiency for water and waste management organizations", description: "", tags: [Tag.ANGULAR, Tag.REDUX, Tag.CSHARP, Tag.TYPESCRIPT]},
    {id: 2, name: "Digital Access Portal", pictures: [], projectLink: "", summary: "Informational and managerial access portal to organize permissions for clients and employees", description: "", tags: [Tag.ANGULAR, Tag.REDUX, Tag.NODEJS, Tag.TYPESCRIPT]},
    {id: 3, name: "Emergency Logistics", pictures: [], projectLink: "", summary: "A NASCAR mobile app displaying local hospital information for first responders and medical personnel at NASCAR events", description: "", tags: [Tag.ANGULAR, Tag.CSHARP, Tag.NODEJS, Tag.TYPESCRIPT]},
    {id: 4, name: "One of a Kind", pictures: ["ooak1.jpg","ooak2.jpg","ooak3.jpg"], projectLink: "https://github.com/AustinDeClerck/OOAK", summary: "Gallery site to display my dad's metal creations!", description: "OOAK, otherwise known as One of a Kind, is the 'brand' created by my dad as an explanation for his variety of metal creations. While it is not a real brand, and he does not want to market or advertize his creations, I still took some personal time to create a website for them. Along with creating something for my dad, it was also used to experiment with Grid CSS effects and gallery features. Each gallery piece has a small description and name for each creation.", tags: [Tag.JAVASCRIPT]},
    {id: 5, name: "VanParksVision Site", pictures: ["vanparksvision1.jpg","vanparksvision2.jpg","vanparksvision3.jpg"], projectLink: "https://github.com/AustinDeClerck/VanParksVision", summary: "Custom built website for Vancouver City Parks & Recreation!", description: "VanParksVision is a mobile app that uses augmented reality to reimagine upcoming Vancouver, Washington parks. The app showcases the changes coming to Vancouver parks and provides information helpful to guests, such as hours, amenities, and accessibility features. Designed to be used by all ages and abilities, the app is interactive, informative, and innovative.", tags: [Tag.REACT]},
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id:' + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    if(filterTags.length == 0) {
      return this.GetProjects();
    }

    filterTags.forEach(tag => {
      this.projects.forEach(project => {
        if(project.tags.includes(tag) && !filteredProjects.includes(project)) {
          filteredProjects.push(project);
        }
      })
    })

    // this.projects.forEach(project => {
    //   let findAll: boolean = true;

    //   filterTags.forEach((filterTag) => {
    //     if (project.tags.includes(filterTag) == false) {
    //       findAll = false;
    //     }
    //   })

    //   if (findAll && !filteredProjects.includes(project)){
    //     filteredProjects.push(project);
    //   }
    // }) 
    return filteredProjects;
  }
}
