import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedcitiesComponent } from './featuredcities.component';

describe('FeaturedcitiesComponent', () => {
  let component: FeaturedcitiesComponent;
  let fixture: ComponentFixture<FeaturedcitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedcitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedcitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
