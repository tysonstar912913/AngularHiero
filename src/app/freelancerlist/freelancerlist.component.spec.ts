import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerlistComponent } from './freelancerlist.component';

describe('FreelancerlistComponent', () => {
  let component: FreelancerlistComponent;
  let fixture: ComponentFixture<FreelancerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
