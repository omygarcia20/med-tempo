import { Component } from '@angular/core';
import { PrimeModule } from '../../../../prime/prime.module';

@Component({
  selector: 'app-overlay-panel',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './overlay-panel.component.html',
  styleUrl: './overlay-panel.component.scss',
})
export class OverlayPanelComponent {}
