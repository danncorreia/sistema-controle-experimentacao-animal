import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDiscenteButtonComponent } from './login-discente-button.component';

describe('LoginDiscenteButtonComponent', () => {
  let component: LoginDiscenteButtonComponent;
  let fixture: ComponentFixture<LoginDiscenteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDiscenteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDiscenteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
