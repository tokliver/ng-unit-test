import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  mySharedFunction(){
    console.log("my function is calling");
  }
}
