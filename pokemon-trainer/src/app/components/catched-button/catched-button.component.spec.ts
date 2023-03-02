import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchedButtonComponent } from './catched-button.component';

describe('CatchedButtonComponent', () => {
  let component: CatchedButtonComponent;
  let fixture: ComponentFixture<CatchedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchedButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
