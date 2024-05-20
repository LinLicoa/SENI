import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniboxComponent } from './senibox.component';

describe('SeniboxComponent', () => {
  let component: SeniboxComponent;
  let fixture: ComponentFixture<SeniboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeniboxComponent]
    });
    fixture = TestBed.createComponent(SeniboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
