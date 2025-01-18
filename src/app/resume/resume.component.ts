import { Component, Renderer2 } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ AccordionModule ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  constructor(private renderer: Renderer2) {

  }

  isSummaryOpen: boolean = false;
  isWorkExperienceOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isTechSkillsOpen: boolean = false;
  isSoftSkillsOpen: boolean = false;

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'Software Enginneer - Resume (Austin De Clerck).pdf');
    link.setAttribute('download', 'Software Enginneer - Resume (Austin De Clerck).pdf');
    link.click();
    link.remove();
  }
}
