import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4CoberturaComponent } from './home4-cobertura.component';

describe('Home4CoberturaComponent', () => {
  let component: Home4CoberturaComponent;
  let fixture: ComponentFixture<Home4CoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4CoberturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4CoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
