import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LombaComponent } from './lomba.component';

describe('LombaComponent', () => {
  let component: LombaComponent;
  let fixture: ComponentFixture<LombaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LombaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
