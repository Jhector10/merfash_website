import { Component, OnInit } from '@angular/core';
import { Instagram } from './instagram';
import { InstagramService } from './instagram.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})

export class InstagramComponent implements OnInit {

  instagrams: Instagram[] = [];
  
  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.getInstagrams();
  }


  getInstagrams(): void{
    this.instagramService.getTestimonials().subscribe((instagrams: Instagram[]) => (this.instagrams = instagrams));
  }
}

