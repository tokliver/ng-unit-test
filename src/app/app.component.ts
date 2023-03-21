import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-ng-app';
  btnText = "Subscribe";
  isSubscribed= false;

  subscribe(){
    setTimeout(()=>{
      this.isSubscribed = true;
      this.btnText = "Subscribeb"
    }, 3000)
  }
}
