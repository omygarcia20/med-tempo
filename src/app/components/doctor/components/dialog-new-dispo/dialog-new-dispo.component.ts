import { Component, OnInit } from '@angular/core';
import { PrimeModule } from '../../../../shared/prime/prime.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-new-dispo',
  standalone: true,
  imports: [PrimeModule, CommonModule],
  templateUrl: './dialog-new-dispo.component.html',
  styleUrl: './dialog-new-dispo.component.scss',
})
export class DialogNewDispoComponent implements OnInit {
  visible: boolean = false;
  horas: any;

  showDialogNewDispo() {
    this.visible = !this.visible;
  }
  datesAndTimes = [
    { fecha: '2023-10-01', horas: ['10:00', '11:00', '12:00'] },
    { fecha: '2023-10-02', horas: ['13:00', '14:00', '15:00'] },
    { fecha: '2023-10-03', horas: ['16:00', '17:00', '18:00'] },
    { fecha: '2023-10-01', horas: ['10:00', '11:00', '12:00'] },
    { fecha: '2023-10-02', horas: ['13:00', '14:00', '15:00'] },
    { fecha: '2023-10-03', horas: ['16:00', '17:00', '18:00'] },
  ];

  selectedTimes: any = {};

  ngOnInit(): void {
    this.datesAndTimes.forEach((item) => {
      this.selectedTimes[item.fecha] = null;
    });
    this.horas = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
    ];
  }
}
