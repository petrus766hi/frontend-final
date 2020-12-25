import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { Home_DashboardComponent } from './home_dashboard.component';
import { QuoteService } from './quote.service';

describe('Home_DashboardComponent', () => {
  let component: Home_DashboardComponent;
  let fixture: ComponentFixture<Home_DashboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CoreModule, SharedModule, HttpClientTestingModule],
        declarations: [Home_DashboardComponent],
        providers: [QuoteService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Home_DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
