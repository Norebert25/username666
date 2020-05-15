import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDistortedComponent } from './home-distorted.component';

describe('HomeDistortedComponent', () => {
  let component: HomeDistortedComponent;
  let fixture: ComponentFixture<HomeDistortedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDistortedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDistortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
