import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { USERS } from './mock-data/user';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all users', ()=>{
    service.getAllUsers().subscribe((users:any)=>{
      expect(users).toBeTruthy();
      expect(users.length).toBe(2);
      const secondUser = users.find((user:any)=> user.id==2);
      expect(secondUser.name).toBe("Ron  Weasley");
    });
    const mockResq = testingController.expectOne('api/users');
    expect(mockResq.request.method).toEqual('GET');
    mockResq.flush(Object.values(USERS))
  })

  it('should get user by id', ()=>{
    service.getUserById(1).subscribe((user:any)=>{
      expect(user).toBeTruthy();
      expect(user.name).toBe("Harry Potter");
    });
    const mockResq = testingController.expectOne('api/users/1');
    expect(mockResq.request.method).toEqual('GET');
    mockResq.flush(USERS[0]);
  });

  it('should update user by id', ()=>{
    let changes = {age:24};
    service.updateUser(1,changes).subscribe((user:any)=>{
      expect(user).toBeTruthy();
      expect(user.id).toBe(1);
    });
    const mockResq = testingController.expectOne('api/users/1');
    expect(mockResq.request.method).toEqual('PUT');
    let modifierUser = USERS[0];
    modifierUser.age = 24 ;
    expect(mockResq.request.body.age).toEqual(changes.age);
    mockResq.flush(modifierUser);
  });

  

  afterEach(()=>{
    testingController.verify();
  });
});
