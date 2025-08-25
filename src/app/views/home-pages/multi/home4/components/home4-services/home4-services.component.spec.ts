import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4BeneficiosComponent } from './home4-services.component';

describe('Home4BeneficiosComponent', () => {
  let component: Home4BeneficiosComponent;
  let fixture: ComponentFixture<Home4BeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4BeneficiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4BeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
