import { Component, OnInit } from '@angular/core';
import { Deliverable } from '../deliverable';
import {DeliverableService} from '../deliverable.service';

@Component({
  selector: 'app-deliverable',
  templateUrl: './deliverable.component.html',
  styleUrls: ['./deliverable.component.css']
})
export class DeliverableComponent implements OnInit {
  deliverables : Deliverable[];

  constructor(private deliverableService: DeliverableService) { }

   ngOnInit() {
     this.getDeliverables();
   }

   getDeliverables(): void {
     this.deliverableService.getDeliverables()
      .subscribe(deliverables => this.deliverables = deliverables);
   }


}
