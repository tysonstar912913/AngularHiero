import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedjobsComponent } from './featuredjobs.component';

describe('FeaturedjobsComponent', () => {
  let component: FeaturedjobsComponent;
  let fixture: ComponentFixture<FeaturedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
