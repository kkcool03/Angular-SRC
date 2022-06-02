import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSecret: boolean = false;
  counter: number = 0;
  counterarr: number []=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  afterfive: number []= [];
  chanegdtext(){
    // var x = document.getElementById("myDiv");
    // if(x.innerHTML === "Secret Password = K-K-COOL"){
    //   x.innerHTML = "";
    // }
    // else{
    //   x.innerHTML = "Secret Password = K-K-COOL";
    // }
    this.showSecret = !this.showSecret;
    this.counter++;
    this.counterarr.push(this.counter);
    // this.counter.push(this.counter.length + 1); without creating 3rd variable we can use this 
    // without this variable --> (counterarr)
  }
  getColor(count: number){
    return count % 2 == 0 ? 'blue' : 'yellow';
}
}
