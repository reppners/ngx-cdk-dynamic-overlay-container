import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { DynamicMatDialogModule } from "./dynamic-overlay-container/dynamic-overlay.module";
import { RootDialogComponent } from './root-dialog/root-dialog.component';
import { ScopedModule } from "./scoped/scoped.module";

@NgModule( {
  declarations: [
    AppComponent,
    RootDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    DynamicMatDialogModule,
    ScopedModule,
    RouterModule.forRoot(
      [
        {
          path: "lazy",
          loadChildren: "./lazy/lazy.module#LazyModule"
        }
      ],
    )
  ],
  entryComponents: [RootDialogComponent],
  bootstrap: [AppComponent]
} )
export class AppModule {
}
