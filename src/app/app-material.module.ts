import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const importExport = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
  MatTableModule
];

@NgModule({
  imports: importExport,
  exports: importExport,
})
export class AppMaterialModule {}
