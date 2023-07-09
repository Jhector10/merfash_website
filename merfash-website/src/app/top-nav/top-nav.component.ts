import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent{

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
