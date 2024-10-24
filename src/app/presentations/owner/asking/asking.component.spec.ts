import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskingComponent } from './asking.component';

describe('AskingComponent', () => {
  let component: AskingComponent;
  let fixture: ComponentFixture<AskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
