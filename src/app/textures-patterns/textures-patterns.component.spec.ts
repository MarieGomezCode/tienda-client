import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexturesPatternsComponent } from './textures-patterns.component';

describe('TexturesPatternsComponent', () => {
  let component: TexturesPatternsComponent;
  let fixture: ComponentFixture<TexturesPatternsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TexturesPatternsComponent]
    });
    fixture = TestBed.createComponent(TexturesPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
