import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParecerDialogComponent } from './parecer-dialog.component';

describe('ParecerDialogComponent', () => {
  let component: ParecerDialogComponent;
  let fixture: ComponentFixture<ParecerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParecerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParecerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
