import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DynamicMatDialog } from "./dynamic-overlay-container/dynamic-dialog";
import { RootDialogComponent } from "./root-dialog/root-dialog.component";

@Component( {
  selector: 'sst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent {

  constructor( private mdDialog:MatDialog,
               private customDialog:DynamicMatDialog ) {
  }

  openDialog() {

    this.mdDialog.open( RootDialogComponent );
  }

  openCustomDialog() {

    this.customDialog.open( RootDialogComponent );
  }
}
