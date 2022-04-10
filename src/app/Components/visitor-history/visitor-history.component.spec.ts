import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorHistoryComponent } from './visitor-history.component';

describe('VisitorHistoryComponent', () => {
  let component: VisitorHistoryComponent;
  let fixture: ComponentFixture<VisitorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
