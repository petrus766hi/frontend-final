import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Change_PasswordComponent } from './change_password.component';

describe('Change_PasswordComponent', () => {
  let component: Change_PasswordComponent;
  let fixture: ComponentFixture<Change_PasswordComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Change_PasswordComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Change_PasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
