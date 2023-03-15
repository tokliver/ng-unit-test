//import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';
/*describe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
*/
describe("CalcService", ()=>{
  
  beforeEach(()=>{
    console.log("Before earch is called");
    const shared = new SharedService();
    const calc = new CalcService(shared)
  })

  it("should multiple two numbers",()=>{
    const shared = new SharedService();
    const calc = new CalcService(shared);
    const result = calc.multiply(3,5);
    expect(result).toBe(15);
  })

  it("should add two numbers",()=>{
    const shared = new SharedService();
    const calc = new CalcService(shared);
    const result = calc.add(3,5);
    expect(result).toBe(8);
  })

  it("should call the mySharedFunction function using spyOn", ()=>{
    const shared = new SharedService();
    spyOn(shared,"mySharedFunction");
    const calc = new CalcService(shared);
    const result = calc.multiply(3,5);
    expect(shared.mySharedFunction).toHaveBeenCalled();
  })

  it("should call the  service createSpyObj", ()=>{
   const shared = jasmine.createSpyObj("SharedService",["mySharedFunction"]);
    const calc = new CalcService(shared);
    const result = calc.multiply(3,5);
    expect(shared.mySharedFunction).toHaveBeenCalled();
  })
})