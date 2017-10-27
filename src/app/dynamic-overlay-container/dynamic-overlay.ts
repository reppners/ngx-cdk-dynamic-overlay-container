import { ɵf as MatOverlayPositionBuilder, Overlay, ScrollStrategyOptions } from "@angular/cdk/overlay";
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgZone } from "@angular/core";
import { DynamicOverlayContainer } from "./dynamic-overlay-container";

@Injectable()
export class DynamicOverlay extends Overlay {

  private _dynamicOverlayContainer:DynamicOverlayContainer;

  constructor( scrollStrategies:ScrollStrategyOptions,
               _overlayContainer:DynamicOverlayContainer,
               _componentFactoryResolver:ComponentFactoryResolver,
               _positionBuilder:MatOverlayPositionBuilder,
               _appRef:ApplicationRef,
               _injector:Injector,
               _ngZone:NgZone ) {

    super( scrollStrategies,
      _overlayContainer,
      _componentFactoryResolver,
      _positionBuilder,
      _appRef,
      _injector,
      _ngZone );

    this._dynamicOverlayContainer = _overlayContainer;
  }

  public setContainerElement( containerElement:HTMLElement ):void {

    this._dynamicOverlayContainer.setContainerElement( containerElement );
  }
}
