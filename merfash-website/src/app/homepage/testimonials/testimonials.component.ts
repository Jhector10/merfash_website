import { Component, OnInit } from '@angular/core';
import { Testimonials } from './testimonials';
import { TestimonialsService } from './testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials: Testimonials[] = [];
  
  constructor(private testimonialsService: TestimonialsService) { }

  ngOnInit() {
    this.getTestimonials();
  }


  getTestimonials(): void{
    this.testimonialsService.getTestimonials().subscribe(testimonials => (this.testimonials = testimonials));
  }
}
