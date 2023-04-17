import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoDescriptionComponent } from './promo-description.component';

describe('PromoDescriptionComponent', () => {
  let component: PromoDescriptionComponent;
  let fixture: ComponentFixture<PromoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
