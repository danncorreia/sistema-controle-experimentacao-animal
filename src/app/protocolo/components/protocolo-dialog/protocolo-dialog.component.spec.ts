import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoloDialogComponent } from './protocolo-dialog.component';

describe('ProtocoloDialogComponent', () => {
  let component: ProtocoloDialogComponent;
  let fixture: ComponentFixture<ProtocoloDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocoloDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocoloDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
