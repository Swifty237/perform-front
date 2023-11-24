import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDividerModule,
    MatSelectModule,
    MatListModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
