import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DynamicMatDialog } from "../../dynamic-overlay-container/dynamic-dialog";
import { LazyDialogComponent } from "../lazy-dialog/lazy-dialog.component";

@Component( {
  selector: 'sst-lazy-host',
  templateUrl: './lazy-host.component.html',
  styleUrls: ['./lazy-host.component.css']
} )
export class LazyHostComponent {

  constructor( private mdDialog:MatDialog,
               private customDialog:DynamicMatDialog,
               private elementRef:ElementRef,
               renderer:Renderer2 ) {

    this.customDialog.setContainerElement( this.elementRef.nativeElement, renderer );
  }

  openDialog() {

    this.mdDialog.open( LazyDialogComponent );
  }

  openCustomDialog() {

    this.customDialog.open( LazyDialogComponent );
  }
}
