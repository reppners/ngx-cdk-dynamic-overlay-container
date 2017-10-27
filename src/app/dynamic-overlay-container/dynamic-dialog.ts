import { Location } from "@angular/common";
import { Inject, Injectable, Injector, Optional, Renderer2, SkipSelf } from "@angular/core";
import { MAT_DIALOG_SCROLL_STRATEGY, MatDialog } from "@angular/material";
import { DynamicOverlay } from "./dynamic-overlay";

@Injectable()
export class DynamicMatDialog extends MatDialog {

  private _customOverlay:DynamicOverlay;

  constructor( _overlay:DynamicOverlay,
               _injector:Injector,
               @Optional() location:Location,
               @Inject( MAT_DIALOG_SCROLL_STRATEGY ) _scrollStrategy,
               @Optional() @SkipSelf() _parentDialog:DynamicMatDialog ) {

    super( _overlay, _injector, location, _scrollStrategy, _parentDialog );

    this._customOverlay = _overlay;
  }

  public setContainerElement( containerElement:HTMLElement, renderer:Renderer2 ):void {

    // need to apply this styling to make the backdrop with position: fixed styling cover only the containerElement
    renderer.setStyle( containerElement, "-webkit-transform", "translateZ(0)" );

    this._customOverlay.setContainerElement( containerElement );
  }
}
