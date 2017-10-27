import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DynamicMatDialog } from "../../dynamic-overlay-container/dynamic-dialog";
import { DYNAMIC_MAT_DIALOG_PROVIDERS } from "../../dynamic-overlay-container/dynamic-overlay.module";
import { ScopedDialogComponent } from "../scoped-dialog/scoped-dialog.component";

@Component( {
  selector: 'sst-scoped-host',
  templateUrl: './scoped-host.component.html',
  styleUrls: ['./scoped-host.component.css'],
  // needed for making sure this component gets its own decoupled instances of the DynamicMatDialog service
  // including the DynamicOverlayContainer to specify its own container element
  providers: DYNAMIC_MAT_DIALOG_PROVIDERS
} )
export class ScopedHostComponent {

  constructor( private mdDialog:MatDialog,
               private customDialog:DynamicMatDialog,
               private elementRef:ElementRef,
               renderer:Renderer2 ) {

    this.customDialog.setContainerElement( this.elementRef.nativeElement, renderer );
  }

  openDialog() {

    this.mdDialog.open( ScopedDialogComponent );
  }

  openScopedDialog() {

    this.customDialog.open( ScopedDialogComponent );
  }
}
