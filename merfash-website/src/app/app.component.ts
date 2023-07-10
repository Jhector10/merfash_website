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
          document.title = "Mercedes Santana | About Me";
        } else if (routerData.url == '/privacy-policy') {
          document.title = "Mercedes Santana | Privacy Policy";
        } else if (routerData.url == '/terms-of-service') {
          document.title = "Mercedes Santana | Terms of Service";
        } else if (routerData.url == '/designs') {
          document.title = "Mercedes Santana | Designs";
        } else if (routerData.url == '/contact-us') {
          document.title = "Mercedes Santana | Contact Us";
        } else if (routerData.url == '/schedule-appointment') {
          document.title = "Mercedes Santana | Schedule Appointment";
        } else {
          document.title = "Mercedes Santana | Home";
        }
      }
    });
    return document.title;
  }

}