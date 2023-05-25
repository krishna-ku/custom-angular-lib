import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgColorComponent } from './bg-color.component';

describe('BgColorComponent', () => {
  let component: BgColorComponent;
  let fixture: ComponentFixture<BgColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
