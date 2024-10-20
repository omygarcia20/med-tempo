import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPermissionsComponent } from './dialog-permissions.component';

describe('DialogPermissionsComponent', () => {
  let component: DialogPermissionsComponent;
  let fixture: ComponentFixture<DialogPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPermissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
