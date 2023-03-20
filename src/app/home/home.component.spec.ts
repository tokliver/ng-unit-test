import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement ;

  /* beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  */
 /*beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance ;
    })
 })*/
 beforeEach(waitForAsync(
 () =>{
  TestBed.configureTestingModule({
    declarations: [HomeComponent]
  }).compileComponents().then(()=>{
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance ;
    el = fixture.debugElement ;
  })
 }
 ));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct contents', ()=>{
   let pElement = el.queryAll(By.css('p'));
   expect(pElement[0].nativeElement.textContent).toBe('home works!')

   let buttonElements = el.queryAll(By.css('.btn'));
   expect(buttonElements[0].nativeElement.disabled).toBeTrue();

   let imageElement = el.queryAll(By.css('img'));
   expect(imageElement[0].nativeElement.src).toBe("http://imgsrc.com/123");
   
   component.title = "Welcome to Angular Test";
   fixture.detectChanges();
   let textElement = el.queryAll(By.css('.title'));
   expect(textElement[0].nativeElement.textContent).toBe("Welcome to Angular Test");
  })
});
