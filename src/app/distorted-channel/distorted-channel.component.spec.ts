import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistortedChannelComponent } from './distorted-channel.component';

describe('DistortedChannelComponent', () => {
  let component: DistortedChannelComponent;
  let fixture: ComponentFixture<DistortedChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistortedChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistortedChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
