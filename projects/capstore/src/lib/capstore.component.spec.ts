import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoreComponent } from './capstore.component';

describe('CapstoreComponent', () => {
  let component: CapstoreComponent;
  let fixture: ComponentFixture<CapstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
