import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterplaceComponent } from './masterplace.component';

describe('MasterplaceComponent', () => {
  let component: MasterplaceComponent;
  let fixture: ComponentFixture<MasterplaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterplaceComponent]
    });
    fixture = TestBed.createComponent(MasterplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
