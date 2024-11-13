import { Component, OnInit, ViewChild } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { PrimeModule } from '../../shared/prime/prime.module';
import { DialogDispoComponent } from './components/dialog-dispo/dialog-dispo.component';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [NavBarComponent, PrimeModule, DialogDispoComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorComponent implements OnInit {
  @ViewChild(DialogDispoComponent) dialogDispo!: DialogDispoComponent;

  showDialogDispo() {
    this.dialogDispo.showDialogDispo();
    console.log('showDialogDispo');
  }
  infoNew = [
    {
      name: 'John ',
      apellido: 'Doe',
      especialidad: 'Medico General',
      ciudad: 'Bogota',
    },
  ];

  history = [
    {
      estado: 'Completada',
      nombre: 'John Doe',
      especialidad: 'Medico General',
      ciudad: 'Bogota',
      fecha: '2021-10-10',
      hora: '10:00',
    },
    {
      estado: 'Cancelada',
      nombre: 'John Doe',
      especialidad: 'Medico General',
      ciudad: 'Bogota',
      fecha: '2021-10-10',
      hora: '10:00',
    },
    {
      estado: 'Completada',
      nombre: 'John Doe',
      especialidad: 'Medico General',
      ciudad: 'Bogota',
      fecha: '2021-10-10',
      hora: '10:00',
    },
    {
      estado: 'Cancelada',
      nombre: 'John Doe',
      especialidad: 'Medico General',
      ciudad: 'Bogota',
      fecha: '2021-10-10',
      hora: '10:00',
    },
    {
      estado: 'Pendiente',
      nombre: 'John Doe',
      especialidad: 'Medico General',
      ciudad: 'Bogota',
      fecha: '2021-10-10',
      hora: '10:00',
    },
    {
      estado: 'Pendiente',
      nombre: 'John Doe',
      especialidad: 'Medico General',
      ciudad: 'Bogota',
      fecha: '2021-10-10',
      hora: '10:00',
    },
  ];
  pendingHistory: any = [];

  completeHistory: any = [];

  cancelHistory: any = [];

  ngOnInit(): void {
    this.filterPendingHistory();
    this.filterCompleteHistory();
    this.filterCancelHistory();
  }

  // Función para filtrar elementos con estado 'Pendiente'
  filterPendingHistory() {
    this.pendingHistory = this.history.filter(
      (item) => item.estado === 'Pendiente'
    );
  }

  filterCompleteHistory() {
    this.completeHistory = this.history.filter(
      (item) => item.estado === 'Completada'
    );
  }

  filterCancelHistory() {
    this.cancelHistory = this.history.filter(
      (item) => item.estado === 'Cancelada'
    );
  }

  cancelAppointment() {
    console.log('cancel');
  }
}
