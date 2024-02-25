import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCollectionsComponent } from './popular-collections.component';

describe('PopularCollectionsComponent', () => {
  let component: PopularCollectionsComponent;
  let fixture: ComponentFixture<PopularCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularCollectionsComponent]
    });
    fixture = TestBed.createComponent(PopularCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
