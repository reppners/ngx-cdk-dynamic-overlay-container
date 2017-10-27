import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedHostComponent } from './scoped-host.component';

describe('ScopedHostComponent', () => {
  let component: ScopedHostComponent;
  let fixture: ComponentFixture<ScopedHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopedHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopedHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
