import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAllComponent } from './free-all.component';

describe('FreeAllComponent', () => {
  let component: FreeAllComponent;
  let fixture: ComponentFixture<FreeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreeAllComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
