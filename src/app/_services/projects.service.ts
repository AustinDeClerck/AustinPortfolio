import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "VanParksVision App", pictures: ["vanparksapp1.jpg","vanparksapp2.jpg","vanparksapp3.jpg"], projectLink: "https://github.com/crowdbotics-apps/vanparksvision-7950", summary: "Fullstack promotional park app created using React Native, Ruby, and Node.js", description: "VanParksVision is a mobile app that uses augmented reality to reimagine upcoming Vancouver, Washington parks. The app showcases the changes coming to Vancouver parks and provides information helpful to guests, such as hours, amenities, and accessibility features. Designed to be used by all ages and abilities, the app is interactive, informative, and innovative.", tags: [Tag.REACT, Tag.PYTHON, Tag.RUBY]},
    {id: 1, name: "Water Management Services", pictures: ["watermanagement1.jpg", "watermanagement2.jpg", "watermanagement3.jpg", ], projectLink: "", summary: "Managerial consulting tools to help boost efficiency for water and waste management organizations", description: "As a consulting company, Stantec requires access to a wide range of data to propose initiatives for efficiency. The set of water management service apps allows organizations to receive this data directly and receive solutions without direct communication. These apps display data corresponding to flood and water sensors, warehouses, milestone goals, regulatory compliance, and more to make communication swift and simple.", tags: [Tag.ANGULAR, Tag.REDUX, Tag.CSHARP, Tag.TYPESCRIPT]},
    {id: 2, name: "Stantec Digital Access Portal", pictures: [], projectLink: "", summary: "Managerial Angular-based access portal to organize permissions for clients and employees", description: "The Stantec Digital Access Portal is a modular, database-driven authentication portal for employees and external clients of Stantec Consulting Services and Stantec.io. The portal combines information about organizations, people, and their associations to assign access permissions for projects. It also functions as a navigation site to reach Stantec.io's various applications, both finished and under development.", tags: [Tag.ANGULAR, Tag.REDUX, Tag.NODEJS, Tag.TYPESCRIPT]},
    {id: 3, name: "Emergent App", pictures: [], projectLink: "", summary: "An NASCAR mobile app utilizing Angular and Leaflet to display local hospital information", description: "As NASCAR is an event-based organization, their events are required to have emergency responders and personnel present. The Emergent app utilizes API data from hospitals across the US to display local facilities, their capabilities, and their hours of operation based on the distance from scheduled NASCAR events. This allows the emergency personnel at those events to quickly identify where to relocate patients in case of emergency that can not be handled on site.", tags: [Tag.ANGULAR, Tag.CSHARP, Tag.NODEJS, Tag.TYPESCRIPT]},
    {id: 4, name: "One of a Kind", pictures: ["ooak1.jpg","ooak2.jpg","ooak3.jpg"], projectLink: "https://github.com/AustinDeClerck/OOAK", summary: "Informational website created with pure HTML, CSS, and JavaScript", description: "OOAK, otherwise known as One of a Kind, is the 'brand' created by my dad as an explanation for his variety of metal creations. While it is not a real brand, and he does not want to market or advertize his creations, I still took some personal time to create a website for them. Along with creating something for my dad, it was also used to experiment with Grid CSS effects and gallery features. Each gallery piece has a small description and name for each creation.", tags: [Tag.JAVASCRIPT]},
    {id: 5, name: "VanParksVision Site", pictures: ["vanparksvision1.jpg","vanparksvision2.jpg","vanparksvision3.jpg"], projectLink: "https://github.com/AustinDeClerck/VanParksVision", summary: "Custom built React website for Vancouver City Parks & Recreation!", description: "VanParksVision is a mobile app that uses augmented reality to reimagine upcoming Vancouver, Washington parks. The app showcases the changes coming to Vancouver parks and provides information helpful to guests, such as hours, amenities, and accessibility features. Designed to be used by all ages and abilities, the app is interactive, informative, and innovative.", tags: [Tag.REACT]},
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
