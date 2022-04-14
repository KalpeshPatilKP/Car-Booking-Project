import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCancelledTripsComponent } from './customer-cancelled-trips.component';

describe('CustomerCancelledTripsComponent', () => {
  let component: CustomerCancelledTripsComponent;
  let fixture: ComponentFixture<CustomerCancelledTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCancelledTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCancelledTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
