import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteCargaInternacionalComponent } from './transporte-carga-internacional.component';

describe('TransporteCargaInternacionalComponent', () => {
  let component: TransporteCargaInternacionalComponent;
  let fixture: ComponentFixture<TransporteCargaInternacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransporteCargaInternacionalComponent]
    });
    fixture = TestBed.createComponent(TransporteCargaInternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
