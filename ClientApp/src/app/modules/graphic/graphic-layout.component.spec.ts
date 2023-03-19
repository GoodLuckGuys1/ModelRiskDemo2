import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicLayoutComponent } from './graphic-layout.component';

describe('GraphicLayoutComponent', () => {
  let component: GraphicLayoutComponent;
  let fixture: ComponentFixture<GraphicLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
