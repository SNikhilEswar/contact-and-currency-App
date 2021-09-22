import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConDecComponent } from './con-dec.component';

describe('ConDecComponent', () => {
  let component: ConDecComponent;
  let fixture: ComponentFixture<ConDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConDecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
