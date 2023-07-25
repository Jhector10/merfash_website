import { Component, OnInit } from '@angular/core';
import { DesignsService } from './designs.service';
import { Designs } from './designs';
import * as AOS from 'aos';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {

  designs: Designs[] = [];
  
  constructor(private designsService: DesignsService) { }

  getDesignTypes(): void{
    this.designsService.getDesigns().subscribe(designs => (this.designs = designs));
  }

  ngOnInit() {
    var video = document.querySelector("video");
    video!.oncanplaythrough = function () {
      video!.muted = true;
      video!.play();
    } 
    
    this.getDesignTypes();
    AOS.init();
  }



}
