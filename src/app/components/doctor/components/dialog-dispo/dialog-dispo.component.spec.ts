import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDispoComponent } from './dialog-dispo.component';

describe('DialogDispoComponent', () => {
  let component: DialogDispoComponent;
  let fixture: ComponentFixture<DialogDispoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDispoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
