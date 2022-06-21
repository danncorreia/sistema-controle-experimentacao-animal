import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDocenteButtonComponent } from './login-docente-button.component';

describe('LoginDocenteButtonComponent', () => {
  let component: LoginDocenteButtonComponent;
  let fixture: ComponentFixture<LoginDocenteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDocenteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDocenteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
