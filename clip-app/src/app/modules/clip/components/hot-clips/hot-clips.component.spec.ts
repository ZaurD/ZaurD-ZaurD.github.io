import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotClipsComponent } from './hot-clips.component';

describe('HotClipsComponent', () => {
  let component: HotClipsComponent;
  let fixture: ComponentFixture<HotClipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotClipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
