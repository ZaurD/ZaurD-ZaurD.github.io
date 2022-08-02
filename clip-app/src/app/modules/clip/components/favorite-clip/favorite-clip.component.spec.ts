import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteClipComponent } from './favorite-clip.component';

describe('FavoriteClipComponent', () => {
  let component: FavoriteClipComponent;
  let fixture: ComponentFixture<FavoriteClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteClipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
