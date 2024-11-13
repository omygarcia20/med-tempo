import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { DialogPermissionsComponent } from './components/dialog-permissions/dialog-permissions.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { By } from '@angular/platform-browser';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent, DialogPermissionsComponent],
      imports: [TableModule, ButtonModule, CardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    // Test to check if the component is created successfully
    expect(component).toBeTruthy();
  });

  it('should render the table with user data', () => {
    // Test to check if the table renders correctly with the mock data
    component.users = [
      { code: 1, name: 'John Doe', category: 'Admin', quantity: 1 },
    ];
    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('p-table tbody tr'));
    expect(tableRows.length).toBe(1);

    const firstRowCells = tableRows[0].queryAll(By.css('td'));
    expect(firstRowCells[0].nativeElement.textContent).toContain('1');
    expect(firstRowCells[1].nativeElement.textContent).toContain('John Doe');
    expect(firstRowCells[2].nativeElement.textContent).toContain('Admin');
  });

  it('should call showDialogPermissions when the button is clicked', () => {
    // Test to check if the showDialogPermissions method is called when the button is clicked
    spyOn(component, 'showDialogPermissions');

    component.users = [
      { code: 1, name: 'John Doe', category: 'Admin', quantity: 1 },
    ];
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('p-button'));
    button.triggerEventHandler('onClick', null);

    expect(component.showDialogPermissions).toHaveBeenCalled();
  });
});

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent, DialogPermissionsComponent],
      imports: [TableModule, ButtonModule, CardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test to check if the component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test to check if the table renders with the correct number of rows
  it('should render table with correct number of rows', () => {
    component.users = [
      { code: 1, name: 'John Doe', category: 'Admin', quantity: 1 },
      { code: 2, name: 'Jane Smith', category: 'User', quantity: 2 },
    ];
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('p-table tbody tr'));
    expect(rows.length).toBe(2);
  });

  // Test to check if the table headers are rendered correctly
  it('should render table headers correctly', () => {
    const headers = fixture.debugElement.queryAll(By.css('p-table thead th'));
    expect(headers.length).toBe(4);
    expect(headers[0].nativeElement.textContent.trim()).toBe('User ID');
    expect(headers[1].nativeElement.textContent.trim()).toBe('Name');
    expect(headers[2].nativeElement.textContent.trim()).toBe('Category');
    expect(headers[3].nativeElement.textContent.trim()).toBe('Permissions');
  });

  // Test to check if the showDialogPermissions method is called on button click
  it('should call showDialogPermissions on button click', () => {
    spyOn(component, 'showDialogPermissions');
    component.users = [
      { code: 1, name: 'John Doe', category: 'Admin', quantity: 1 },
    ];
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('p-button')).nativeElement;
    button.click();
    expect(component.showDialogPermissions).toHaveBeenCalled();
  });
}); // src/app/components/admin/test_admin.component.spec.ts

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent, DialogPermissionsComponent],
      imports: [TableModule, ButtonModule, CardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    component.users = [
      { code: 1, name: 'John Doe', category: 'Admin', quantity: 1 },
    ];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the table with user data', () => {
    const tableRows = fixture.debugElement.queryAll(By.css('p-table tr'));
    expect(tableRows.length).toBe(2); // 1 header row + 1 data row

    const dataRow = tableRows[1].nativeElement;
    expect(dataRow.cells[0].textContent).toContain('1');
    expect(dataRow.cells[1].textContent).toContain('John Doe');
    expect(dataRow.cells[2].textContent).toContain('Admin');
  });

  it('should call showDialogPermissions when button is clicked', () => {
    spyOn(component, 'showDialogPermissions');
    const button = fixture.debugElement.query(By.css('p-button')).nativeElement;
    button.click();
    expect(component.showDialogPermissions).toHaveBeenCalled();
  });

  it('should show dialog when showDialogPermissions is called', () => {
    const dialogPermissions = fixture.debugElement.query(
      By.directive(DialogPermissionsComponent)
    ).componentInstance;
    spyOn(dialogPermissions, 'showDialog');
    component.showDialogPermissions();
    expect(dialogPermissions.showDialog).toHaveBeenCalled();
  });
});

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent, DialogPermissionsComponent],
      imports: [TableModule, ButtonModule, CardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    component.users = [
      { code: 1, name: 'John Doe', category: 'Admin', quantity: 1 },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table with user data', () => {
    const compiled = fixture.nativeElement;
    const tableRows = compiled.querySelectorAll('p-table tr');
    expect(tableRows.length).toBe(2); // 1 header row + 1 data row
    expect(tableRows[1].textContent).toContain('John Doe');
  });

  it('should call showDialogPermissions when button is clicked', () => {
    spyOn(component, 'showDialogPermissions');
    const button = fixture.debugElement.query(By.css('p-button')).nativeElement;
    button.click();
    expect(component.showDialogPermissions).toHaveBeenCalled();
  });
});
