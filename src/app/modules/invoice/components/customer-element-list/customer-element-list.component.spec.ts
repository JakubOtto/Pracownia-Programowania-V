import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerElementListComponent } from './customer-element-list.component';

describe('CustomerElementListComponent', () => {
  let component: CustomerElementListComponent;
  let fixture: ComponentFixture<CustomerElementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerElementListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
