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

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }
}
