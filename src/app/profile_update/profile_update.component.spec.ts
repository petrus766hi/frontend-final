import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Profile_UpdateComponent } from './profile_update.component';

describe('Profile_UpdateComponent', () => {
  let component: Profile_UpdateComponent;
  let fixture: ComponentFixture<Profile_UpdateComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [Profile_UpdateComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile_UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
