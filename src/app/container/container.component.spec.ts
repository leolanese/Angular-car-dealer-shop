import { LayoutModule } from '@angular/cdk/layout';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import { ThreeComponent } from './../component/threeComponent/three.component';

import { configureTestSuite } from 'ng-bullet';

describe('Validate Container', () => {
  let component: ThreeComponent;
  let fixture: ComponentFixture<ThreeComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [
        ThreeComponent
      ],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

});
