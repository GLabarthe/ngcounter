import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterwallComponent } from './counterwall.component';

describe('CounterwallComponent', () => {
  let component: CounterwallComponent;
  let fixture: ComponentFixture<CounterwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
