import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLombaComponent } from './listlomba.component';

describe('ListLombaComponent', () => {
  let component: ListLombaComponent;
  let fixture: ComponentFixture<ListLombaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListLombaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
