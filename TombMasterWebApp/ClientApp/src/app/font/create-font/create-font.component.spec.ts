import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFontComponent } from './create-font.component';

describe('CreateFontComponent', () => {
  let component: CreateFontComponent;
  let fixture: ComponentFixture<CreateFontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
