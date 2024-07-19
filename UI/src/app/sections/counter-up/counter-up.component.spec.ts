import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterUpComponent } from './counter-up.component';

describe('CounterUpComponent', () => {
  let component: CounterUpComponent;
  let fixture: ComponentFixture<CounterUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
