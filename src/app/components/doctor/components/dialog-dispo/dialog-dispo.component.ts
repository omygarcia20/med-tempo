import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeModule } from '../../../../shared/prime/prime.module';
import { CommonModule } from '@angular/common';
import { DialogNewDispoComponent } from '../dialog-new-dispo/dialog-new-dispo.component';

@Component({
  selector: 'app-dialog-dispo',
  standalone: true,
  imports: [PrimeModule, CommonModule, DialogNewDispoComponent],
  templateUrl: './dialog-dispo.component.html',
  styleUrl: './dialog-dispo.component.scss',
})
export class DialogDispoComponent implements OnInit {
  @ViewChild(DialogNewDispoComponent) DialogNewDispo!: DialogNewDispoComponent;

  hours!: any;
  selectedHours!: any;
  products!: any;
  datesAndTimes = [
    { fecha: '2023-10-01', horas: ['10:00', '11:00', '12:00'] },
    { fecha: '2023-10-02', horas: ['13:00', '14:00', '15:00'] },
    { fecha: '2023-10-03', horas: ['16:00', '17:00', '18:00'] },
  ];

  selectedTimes: any = {};

  ngOnInit(): void {
    this.datesAndTimes.forEach((item) => {
      this.selectedTimes[item.fecha] = null;
    });
  }
  visible: boolean = false;

  showDialogDispo() {
    this.visible = !this.visible;
  }
  showDialogNewDispo() {
    this.DialogNewDispo.showDialogNewDispo();
  }
}
