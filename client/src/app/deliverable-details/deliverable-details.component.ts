import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DeliverableService }  from '../deliverable.service';

import { Deliverable } from '../deliverable';

@Component({
  selector: 'app-deliverable-details',
  templateUrl: './deliverable-details.component.html',
  styleUrls: ['./deliverable-details.component.css']
})
export class DeliverableDetailsComponent implements OnInit {

  deliverable: Deliverable;

  constructor(
    private route: ActivatedRoute,
    private deliverableService: DeliverableService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDeliverable();
  }
  

  getDeliverable(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deliverableService.getDeliverable(id)
      .subscribe(deliverable => this.deliverable = deliverable);
  }

  goBack(): void {
    this.location.back();
  }

}
