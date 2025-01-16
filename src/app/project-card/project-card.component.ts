import { Component, Input } from '@angular/core';
import { Project } from '../_models/project';
import { BsModalRef, BsModalService, ModalModule, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  providers: [ BsModalService ],
  imports: [ ModalModule ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }

  OpenProjectModal() {
    const modalOptions: ModalOptions = {
      class: 'modal-lg',
      initialState: {
        project: this.project
      }
    }

    this.modalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}