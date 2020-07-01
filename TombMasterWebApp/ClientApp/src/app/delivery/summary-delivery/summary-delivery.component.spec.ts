import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDeliveryComponent } from './summary-delivery.component';

describe('SummaryDeliveryComponent', () => {
  let component: SummaryDeliveryComponent;
  let fixture: ComponentFixture<SummaryDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
