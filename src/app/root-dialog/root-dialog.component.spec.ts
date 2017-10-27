import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootDialogComponent } from './root-dialog.component';

describe('RootDialogComponent', () => {
  let component: RootDialogComponent;
  let fixture: ComponentFixture<RootDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
