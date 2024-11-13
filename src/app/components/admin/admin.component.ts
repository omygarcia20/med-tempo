import { Component, OnInit, ViewChild } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { PrimeModule } from '../../shared/prime/prime.module';
import { DialogPermissionsComponent } from './components/dialog-permissions/dialog-permissions.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavBarComponent, PrimeModule, DialogPermissionsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  @ViewChild(DialogPermissionsComponent)
  dialogPermissions!: DialogPermissionsComponent;

  users = [
    {
      code: 1,
      name: 'John Doe',
      category: 'Admin',
      quantity: 1,
    },
  ];
  ngOnInit(): void {}

  showDialogPermissions() {
    this.dialogPermissions.alterDialog();
  }
}
