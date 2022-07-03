import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProtocoloComponent } from './add-protocolo.component';

describe('AddProtocoloComponent', () => {
  let component: AddProtocoloComponent;
  let fixture: ComponentFixture<AddProtocoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProtocoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
