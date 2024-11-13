import { Component, OnInit } from '@angular/core';
import { PrimeModule } from '../../../../shared/prime/prime.module';

@Component({
  selector: 'app-dialog-permissions',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './dialog-permissions.component.html',
  styleUrl: './dialog-permissions.component.scss',
})
export class DialogPermissionsComponent implements OnInit {
  visible: boolean = false;
  permissions!: any[];

  ngOnInit(): void {
    this.permissions = [
      { name: 'Admin', code: 'ADM' },
      { name: 'User', code: 'US' },
      { name: 'Doctor', code: 'DC' },
    ];
  }

  alterDialog() {
    this.visible = !this.visible;
    console.log('dialog');
  }
}
