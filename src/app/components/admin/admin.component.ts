import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { PrimeModule } from '../../shared/prime/prime.module';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavBarComponent, PrimeModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  users = [
    {
      code: 1,
      name: 'John Doe',
      category: 'Admin',
      quantity: 1,
    },
  ];
  ngOnInit(): void {}
}
