import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';

const MODULES = [
  TableModule,
  MenubarModule,
  DialogModule,
  ButtonModule,
  CardModule,
  InputTextModule,
  FloatLabelModule,
  PasswordModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  providers: [],
  exports: [MODULES],
})
export class PrimeModule {}
