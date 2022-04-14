import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverNotifierComponent } from './driver-notifier.component';

describe('DriverNotifierComponent', () => {
  let component: DriverNotifierComponent;
  let fixture: ComponentFixture<DriverNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
