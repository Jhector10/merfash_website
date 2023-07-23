import { Component, OnInit } from '@angular/core';
import { ResolveEnd, Router, RouterModule } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { TopNavComponent } from './top-nav/top-nav.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  firebaseConfig = {
    apiKey: "AIzaSyBf4IVhm3Q32wNxbrUM5Cn1SiJhckFh3ZM",
    authDomain: "merfash-website.firebaseapp.com",
    projectId: "merfash-website",
    storageBucket: "merfash-website.appspot.com",
    messagingSenderId: "1040939818478",
    appId: "1:1040939818478:web:0f499d59587fd1c417c2ff",
    measurementId: "G-X59QXSEMGJ"
  };
  
  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore(this.app);
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