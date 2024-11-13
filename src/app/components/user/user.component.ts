import { Component, OnInit, ViewChild } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { PrimeModule } from '../../shared/prime/prime.module';
import { DialogNewComponent } from './components/dialog-new/dialog-new.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NavBarComponent, PrimeModule, DialogNewComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  @ViewChild(DialogNewComponent)
  dialogNew!: DialogNewComponent;

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

  showDialogNew() {
    this.dialogNew.alterDialog();
    console.log('dialog');
  }

  cancelAppointment() {
    console.log('cancel');
  }
}
