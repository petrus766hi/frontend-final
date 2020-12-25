import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPanitiaComponent } from './editpanitia.component';

describe('EditPanitiaComponent', () => {
  let component: EditPanitiaComponent;
  let fixture: ComponentFixture<EditPanitiaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditPanitiaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPanitiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
