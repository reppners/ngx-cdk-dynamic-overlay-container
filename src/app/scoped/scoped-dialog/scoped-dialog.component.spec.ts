import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedDialogComponent } from './scoped-dialog.component';

describe('ScopedDialogComponent', () => {
  let component: ScopedDialogComponent;
  let fixture: ComponentFixture<ScopedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
