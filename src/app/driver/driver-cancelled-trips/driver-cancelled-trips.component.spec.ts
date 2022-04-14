import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCancelledTripsComponent } from './driver-cancelled-trips.component';

describe('DriverCancelledTripsComponent', () => {
  let component: DriverCancelledTripsComponent;
  let fixture: ComponentFixture<DriverCancelledTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverCancelledTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverCancelledTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
