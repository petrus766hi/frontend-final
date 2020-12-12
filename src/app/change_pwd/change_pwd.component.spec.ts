import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Change_PwdComponent } from './change_pwd.component';

describe('Change_PwdComponent', () => {
  let component: Change_PwdComponent;
  let fixture: ComponentFixture<Change_PwdComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Change_PwdComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Change_PwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
