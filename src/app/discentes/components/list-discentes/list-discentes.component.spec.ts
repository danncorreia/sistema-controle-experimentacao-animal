import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiscentesComponent } from './list-discentes.component';

describe('ListDiscentesComponent', () => {
  let component: ListDiscentesComponent;
  let fixture: ComponentFixture<ListDiscentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDiscentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiscentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
