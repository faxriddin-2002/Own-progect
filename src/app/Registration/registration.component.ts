import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  y: any;
  x: any;
  go(){
    this.y = document.querySelector(".company");
    this.x =document.querySelector('.registration');
    this.y.style.display = "block";
    this.x.style.height = "1100px"
  }
}
