import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 constructor(private router: Router){  
  if (this.router.url.includes('/about')){
      document.title = "Mercedes Santana | About Me";
   } else if (this.router.url == '/privacy-policy'){
     document.title = "Mercedes Santana | Privacy Policy";
   } else if (this.router.url == '/terms-of-service'){
     document.title = "Mercedes Santana | Terms of Service";
   } else if (this.router.url == '/designs'){
     document.title = "Mercedes Santana | Designs";
   } else if (this.router.url == '/contact-us'){
     document.title = "Mercedes Santana | Contact Us";
   } else if (this.router.url == '/schedule-appointment'){
     document.title = "Mercedes Santana | Schedule Appointment";
   } else{
     document.title = "Mercedes Santana | Home";
   }
 }
  ngOnInit(): void {
  
  }
 
}