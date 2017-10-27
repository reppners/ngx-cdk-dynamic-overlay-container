import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";

import { DynamicMatDialogModule } from "../dynamic-overlay-container/dynamic-overlay.module";
import { LazyDialogComponent } from './lazy-dialog/lazy-dialog.component';
import { LazyHostComponent } from './lazy-host/lazy-host.component';

@NgModule( {
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    DynamicMatDialogModule,
    RouterModule.forChild( [
      {
        path: '',
        component: LazyHostComponent,
        pathMatch: 'full'
      },
    ] )
  ],
  declarations: [LazyHostComponent, LazyDialogComponent],
  entryComponents: [LazyDialogComponent]
} )
export class LazyModule {
}
