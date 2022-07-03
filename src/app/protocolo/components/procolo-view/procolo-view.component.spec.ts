import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcoloViewComponent } from './procolo-view.component';

describe('ProcoloViewComponent', () => {
  let component: ProcoloViewComponent;
  let fixture: ComponentFixture<ProcoloViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcoloViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcoloViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
