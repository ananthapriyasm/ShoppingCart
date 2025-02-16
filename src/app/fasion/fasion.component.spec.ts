import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasionComponent } from './fasion.component';

describe('FasionComponent', () => {
  let component: FasionComponent;
  let fixture: ComponentFixture<FasionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FasionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
