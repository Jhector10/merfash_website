import { Component, OnInit } from '@angular/core';
import { ResolveEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  routerData: any;
  constructor(private router: Router) { }
  ngOnInit(){
    this.router.events.subscribe((routerData) => {
      if (routerData instanceof ResolveEnd) {
        if (routerData.url == '/about') {
          document.title = "About Me | Mercedes Santana";
        } else if (routerData.url == '/privacy-policy') {
          document.title = "Privacy Policy | Mercedes Santana";
        } else if (routerData.url == '/terms-of-service') {
          document.title = "Terms of Service | Mercedes Santana";
        } else if (routerData.url == '/designs') {
          document.title = "Designs | Mercedes Santana";
        } else if (routerData.url == '/contact-us') {
          document.title = "Contact Us | Mercedes Santana";
        } else if (routerData.url == '/schedule-appointment') {
          document.title = "Schedule Appointment | Mercedes Santana";
        } else {
          document.title = "Home | Mercedes Santana";
        }
      }
    });
    return document.title;
  }

}