import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverAcceptOrDeclineRideComponent } from './driver-accept-or-decline-ride.component';

describe('DriverAcceptOrDeclineRideComponent', () => {
  let component: DriverAcceptOrDeclineRideComponent;
  let fixture: ComponentFixture<DriverAcceptOrDeclineRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverAcceptOrDeclineRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverAcceptOrDeclineRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
