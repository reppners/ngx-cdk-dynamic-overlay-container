import { OverlayModule } from "@angular/cdk/overlay";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material";
import { DynamicMatDialog } from "./dynamic-dialog";
import { DynamicOverlay } from "./dynamic-overlay";
import { DynamicOverlayContainer } from "./dynamic-overlay-container";

// Inject these providers at the component level
// to get a fresh instance of DynamicMatDialog service with it's own
// instances of DynamicOverlay/DynamicOverlayContainer.
//
// This enables to set the overlay container element dynamically
// and separates it from any other MatDialog/Overlay/OverlayContainer instances.
export const DYNAMIC_MAT_DIALOG_PROVIDERS = [
  DynamicOverlayContainer,
  DynamicOverlay,
  DynamicMatDialog
];

@NgModule( {
  imports: [
    OverlayModule,
    MatDialogModule
  ],
  providers: DYNAMIC_MAT_DIALOG_PROVIDERS
} )
export class DynamicMatDialogModule {
}
