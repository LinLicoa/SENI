import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitesAduanerosLogisticaComponent } from './tramites-aduaneros-logistica.component';

describe('TramitesAduanerosLogisticaComponent', () => {
  let component: TramitesAduanerosLogisticaComponent;
  let fixture: ComponentFixture<TramitesAduanerosLogisticaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramitesAduanerosLogisticaComponent]
    });
    fixture = TestBed.createComponent(TramitesAduanerosLogisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
