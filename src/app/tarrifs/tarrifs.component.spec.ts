import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarrifsComponent } from './tarrifs.component';

describe('TarrifsComponent', () => {
  let component: TarrifsComponent;
  let fixture: ComponentFixture<TarrifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarrifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarrifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
