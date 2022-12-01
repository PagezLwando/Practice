import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

const matArray = [
  CommonModule,
  MatListModule,
  MatSortModule,
  FormsModule,
  MatExpansionModule,
  MatPaginatorModule
  ]

@NgModule({
  declarations: [],
  imports: [matArray],
exports: [matArray]
})
export class MaterialModule { }
