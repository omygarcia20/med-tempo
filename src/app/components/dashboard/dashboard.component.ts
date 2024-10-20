import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { PrimeModule } from '../../shared/prime/prime.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavBarComponent, PrimeModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
