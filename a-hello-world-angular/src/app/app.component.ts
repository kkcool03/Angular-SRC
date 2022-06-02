import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KIRAN KADAM';

  displayName(){
   return 'Mindgate Solutions Pvt Ltd';
  }
}
