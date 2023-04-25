import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestourantComponent } from './restourant.component';

describe('RestourantComponent', () => {
  let component: RestourantComponent;
  let fixture: ComponentFixture<RestourantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestourantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestourantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
