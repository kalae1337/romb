import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RhombusComponent } from './rhombus.component';

describe('RhombusComponent', () => {
  let component: RhombusComponent;
  let fixture: ComponentFixture<RhombusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RhombusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RhombusComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
