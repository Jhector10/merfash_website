import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  // isSticky: boolean = false;
  // checkScroll() {
  //   this.isSticky = window.pageYOffset >= 250;
  // }
 
navbarfixed:boolean = false;
@HostListener('window:scroll', ['$event']) onScroll(){
  if(window.scrollY >= 70){
    this.navbarfixed = true;
  }else{
    this.navbarfixed = false;
  }
}
}
