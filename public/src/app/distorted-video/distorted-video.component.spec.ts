import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistortedVideoComponent } from './distorted-video.component';

describe('DistortedVideoComponent', () => {
  let component: DistortedVideoComponent;
  let fixture: ComponentFixture<DistortedVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistortedVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistortedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
