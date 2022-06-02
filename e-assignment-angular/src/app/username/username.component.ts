import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName: string = '';
  // disabled: boolean = false;

  // if (userName) {
  //   this.disabled = false;
  // }
  // if(this.userName != null){
  //   this.disabled = false;
  // }

  reset(){
    this.userName = "";
    // this.disabled = true;
    
  }
  // onUpdateServerName(event: Event){
  //   this.userName = (<HTMLInputElement> event.target).value;
  //   this.disabled = false;
  // }
  
  constructor() { }

  ngOnInit(): void {
  }

}
