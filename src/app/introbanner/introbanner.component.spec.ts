import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrobannerComponent } from './introbanner.component';

describe('IntrobannerComponent', () => {
  let component: IntrobannerComponent;
  let fixture: ComponentFixture<IntrobannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrobannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
