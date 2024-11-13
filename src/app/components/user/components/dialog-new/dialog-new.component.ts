import { Component, OnInit } from '@angular/core';
import { PrimeModule } from '../../../../shared/prime/prime.module';

@Component({
  selector: 'app-dialog-new',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './dialog-new.component.html',
  styleUrl: './dialog-new.component.scss',
})
export class DialogNewComponent implements OnInit {
  visible: boolean = false;

  appointments: { hour: string }[] = [{ hour: '8:00' }, { hour: '9:00' }];

  ngOnInit(): void {
    this.appointments = [{ hour: '8:00' }, { hour: '9:00' }];
  }

  alterDialog() {
    this.visible = !this.visible;
    console.log('dialog');
  }
}
