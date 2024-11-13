import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewDispoComponent } from './dialog-new-dispo.component';

describe('DialogNewDispoComponent', () => {
  let component: DialogNewDispoComponent;
  let fixture: ComponentFixture<DialogNewDispoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogNewDispoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
