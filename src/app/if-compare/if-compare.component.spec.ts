import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfCompareComponent } from './if-compare.component';

describe('IfCompareComponent', () => {
  let component: IfCompareComponent;
  let fixture: ComponentFixture<IfCompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfCompareComponent]
    });
    fixture = TestBed.createComponent(IfCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
