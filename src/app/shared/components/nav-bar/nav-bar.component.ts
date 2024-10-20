import { Component } from '@angular/core';
import { PrimeModule } from '../../prime/prime.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Log out',
        icon: 'pi pi-sign-out',
      },
    ];
  }
}
