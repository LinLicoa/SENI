import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarmeComponent } from './registrarme.component';

describe('RegistrarmeComponent', () => {
  let component: RegistrarmeComponent;
  let fixture: ComponentFixture<RegistrarmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarmeComponent]
    });
    fixture = TestBed.createComponent(RegistrarmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
