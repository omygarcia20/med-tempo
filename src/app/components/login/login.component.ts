import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeModule } from '../../shared/prime/prime.module';
import { DialogRegisterComponent } from './components/dialog-register/dialog-register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimeModule, DialogRegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  @ViewChild(DialogRegisterComponent) register!: DialogRegisterComponent;

  router = inject(Router);

  registerUser() {
    this.register.showDialog();
    console.log('click');
  }

  logIn() {
    this.router.navigate(['/dashboard']);
    console.log('log in');
  }
}
