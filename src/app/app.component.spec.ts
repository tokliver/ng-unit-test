import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture : ComponentFixture<AppComponent>;
  let el: DebugElement ;
  let component: AppComponent ;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then( ()=>{
      fixture = TestBed.createComponent(AppComponent);
      el = fixture.debugElement ;
      component = fixture.componentInstance ;
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-ng-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-ng-app');
  });

  it('should render a button with text subscribe', ()=>{
    component.isSubscribed = false;
    fixture.detectChanges();
    let  btnElements = el.queryAll(By.css('.subscribe'));
    //component.isSubscribed = false;
    //component.btnText = "Subscribe" ;
    expect(btnElements[0].nativeElement.textContent).toBe("Subscribe");
    expect(btnElements[0].nativeElement.disabled).toBeFalse();

  })
  it('should render a button with text subscribe and the button should be disealed ', ()=>{

    component.isSubscribed = false ;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
   // component.isSubscribed = true;
    //component.btnText = "Subscribe" ;
    btnElements[0].nativeElement.click();
    console.log('*******',btnElements[0].nativeElement);
    setTimeout(()=>{
      fixture.detectChanges();
      btnElements = el.queryAll(By.css('.subscribe'));
      expect(btnElements[0].nativeElement.textContent).toBe("Subscribeb");
      expect(btnElements[0].nativeElement.disabled).toBeFalse();
    }, 3000)
  })
  
});
