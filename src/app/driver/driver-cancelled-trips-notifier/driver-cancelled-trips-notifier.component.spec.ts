import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCancelledTripsNotifierComponent } from './driver-cancelled-trips-notifier.component';

describe('DriverCancelledTripsNotifierComponent', () => {
  let component: DriverCancelledTripsNotifierComponent;
  let fixture: ComponentFixture<DriverCancelledTripsNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCancelledTripsNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCancelledTripsNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
