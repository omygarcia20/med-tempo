import { Component } from '@angular/core';
import { PrimeModule } from '../../../../shared/prime/prime.module';

@Component({
  selector: 'app-dialog-register',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './dialog-register.component.html',
  styleUrl: './dialog-register.component.scss',
})
export class DialogRegisterComponent {
  visible = false;

  showDialog() {
    this.visible = true;
  }
}
