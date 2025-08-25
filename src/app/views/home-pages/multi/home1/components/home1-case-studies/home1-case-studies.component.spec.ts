import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1CoberturaComponent } from './home1-case-studies.component';

describe('Home1CoberturaComponent', () => {
  let component: Home1CoberturaComponent;
  let fixture: ComponentFixture<Home1CoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1CoberturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1CoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
