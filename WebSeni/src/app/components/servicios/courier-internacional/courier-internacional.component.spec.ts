import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierInternacionalComponent } from './courier-internacional.component';

describe('CourierInternacionalComponent', () => {
  let component: CourierInternacionalComponent;
  let fixture: ComponentFixture<CourierInternacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourierInternacionalComponent]
    });
    fixture = TestBed.createComponent(CourierInternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
