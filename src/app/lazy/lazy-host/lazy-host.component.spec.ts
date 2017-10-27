import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyHostComponent } from './lazy-host.component';

describe('LazyHostComponent', () => {
  let component: LazyHostComponent;
  let fixture: ComponentFixture<LazyHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
