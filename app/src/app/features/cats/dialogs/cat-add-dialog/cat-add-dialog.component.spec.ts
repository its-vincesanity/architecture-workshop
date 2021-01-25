import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAddDialogComponent } from './cat-add-dialog.component';

describe('CatAddDialogComponent', () => {
  let component: CatAddDialogComponent;
  let fixture: ComponentFixture<CatAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
