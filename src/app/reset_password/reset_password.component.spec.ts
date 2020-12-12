import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reset_PasswordComponent } from './reset_password.component';

describe('Reset_PasswordComponent', () => {
  let component: Reset_PasswordComponent;
  let fixture: ComponentFixture<Reset_PasswordComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Reset_PasswordComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Reset_PasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
