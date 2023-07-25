import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent{
  constructor(private router: Router) { }
  ngOnInit(){
    this.router.events.subscribe((routerData) => {
      
      // if (routerData instanceof ResolveEnd) {
      //   if (routerData.url == '/about') {
      //     const currentPage = document.querySelectorAll<HTMLElement>('.main-nav');
      //     currentPage[1].style.borderBottom = "2px solid ##ffafb0";
      //   } 
      //   else if (routerData.url == '/designs') {
      //     const currentPage = document.querySelectorAll<HTMLElement>('.main-nav');
      //     currentPage[2].style.borderBottom = "2px solid ##ffafb0";
      //   } else if (routerData.url == '/contact-us') {
      //     const currentPage = document.querySelectorAll<HTMLElement>('.main-nav');
      //     currentPage[3].style.borderBottom = "2px solid ##ffafb0";
      //   } else if (routerData.url == '/schedule-appointment') {
      //     const currentPage = document.querySelectorAll<HTMLElement>('.main-nav');
      //     currentPage[4].style.borderBottom = "2px solid ##ffafb0";
      //   } else {
      //     const currentPage = document.querySelectorAll<HTMLElement>('.main-nav');
      //     currentPage[0].style.borderBottom = "2px solid ##ffafb0";
      //   }
      // }
    });
  }
  showLinks(): void {
    var x = document.getElementById("links");
    var open = document.getElementById("to-open");
    var close = document.getElementById("to-close");
    if (x!.style.display === "block") {
      x!.style.display = "none";
      open!.style.display = "block";
      close!.style.display = "none";
    } else {
      x!.style.display = "block";
      close!.style.display = "block";
      open!.style.display = "none";
    }
  }

  navbarfixed: boolean = false;
  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY >= 70) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
}
