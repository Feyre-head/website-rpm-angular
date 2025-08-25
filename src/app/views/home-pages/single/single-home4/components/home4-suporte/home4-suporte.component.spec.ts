import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4SuporteComponent } from './home4-suporte.component';

describe('Home4SuporteComponent', () => {
  let component: Home4SuporteComponent;
  let fixture: ComponentFixture<Home4SuporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4SuporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4SuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
