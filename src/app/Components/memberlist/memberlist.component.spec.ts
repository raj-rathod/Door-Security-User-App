import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberlistComponent } from './memberlist.component';

describe('MemberlistComponent', () => {
  let component: MemberlistComponent;
  let fixture: ComponentFixture<MemberlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
