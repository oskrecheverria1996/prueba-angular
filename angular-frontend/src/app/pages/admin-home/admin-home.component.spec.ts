import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeComponent } from './admin-home.component';

describe('AdminHomeComponent', () => {
  let component: AdminHomeComponent;
  let fixture: ComponentFixture<AdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('La lista de usuarios es coleccion', () => {
  //   let myVar : Array<any> = component.users_list;
  //   expect(myVar).toEqual('UnitTest');
  // });
});
