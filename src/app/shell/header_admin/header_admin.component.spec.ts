import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { I18nModule } from '@app/i18n';
import { Header_AdminComponent } from './header_admin.component';

describe('Header_AdminComponent', () => {
  let component: Header_AdminComponent;
  let fixture: ComponentFixture<Header_AdminComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, NgbModule, TranslateModule.forRoot(), I18nModule],
        declarations: [Header_AdminComponent],
        providers: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(Header_AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
