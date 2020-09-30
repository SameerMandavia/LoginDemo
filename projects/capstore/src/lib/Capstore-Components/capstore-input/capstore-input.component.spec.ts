import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoreInputComponent } from './capstore-input.component';

describe('CapstoreInputComponent', () => {
  let component: CapstoreInputComponent;
  let fixture: ComponentFixture<CapstoreInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapstoreInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapstoreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
