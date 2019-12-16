import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfopagePage } from './infopage.page';

describe('InfopagePage', () => {
  let component: InfopagePage;
  let fixture: ComponentFixture<InfopagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfopagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
