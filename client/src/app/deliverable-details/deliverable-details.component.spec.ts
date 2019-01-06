import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverableDetailsComponent } from './deliverable-details.component';

describe('DeliverableDetailsComponent', () => {
  let component: DeliverableDetailsComponent;
  let fixture: ComponentFixture<DeliverableDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverableDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
