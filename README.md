# NgxCdkDynamicOverlayContainer

This repository showcases an implementation for custom overlay containers when using @angular/material2 dialogs or @angular/cdk overlay. See [sources](https://github.com/reppners/ngx-cdk-dynamic-overlay-container/tree/master/src/app/dynamic-overlay-container).

@angular/material allowed to dynamically specify the host element of a dialog/panel,
see [$mdPanel#mdpanel-create-config](https://material.angularjs.org/latest/api/service/$mdPanel#mdpanel-create-config) `attachTo`.
 
@angular/material2 `Dialog` respectively @angular/cdk `Overlay` is currently missing such functionality.
