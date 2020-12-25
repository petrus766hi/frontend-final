import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { About_DashboardComponent } from './about_dashboard.component';

describe('About_DashboardComponent', () => {
  let component: About_DashboardComponent;
  let fixture: ComponentFixture<About_DashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [About_DashboardComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(About_DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
