import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePartnersListComponent } from './available-partners-list.component';

describe('AvailablePartnersListComponent', () => {
  let component: AvailablePartnersListComponent;
  let fixture: ComponentFixture<AvailablePartnersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailablePartnersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablePartnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
