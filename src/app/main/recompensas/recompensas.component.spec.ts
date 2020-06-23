import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensasComponent } from './recompensas.component';

describe('RecompensasComponent', () => {
  let component: RecompensasComponent;
  let fixture: ComponentFixture<RecompensasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecompensasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
