import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHomepageComponent } from './menu-homepage.component';

describe('MenuHomepageComponent', () => {
  let component: MenuHomepageComponent;
  let fixture: ComponentFixture<MenuHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
