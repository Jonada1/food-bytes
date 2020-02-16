import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageColorsComponent } from './image-colors.component';

describe('ImageColorsComponent', () => {
  let component: ImageColorsComponent;
  let fixture: ComponentFixture<ImageColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageColorsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
