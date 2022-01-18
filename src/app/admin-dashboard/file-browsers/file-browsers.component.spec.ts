import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBrowsersComponent } from './file-browsers.component';

describe('FileBrowsersComponent', () => {
  let component: FileBrowsersComponent;
  let fixture: ComponentFixture<FileBrowsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileBrowsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBrowsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
