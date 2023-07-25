import { Component, OnInit } from '@angular/core';
import { DesignTypes } from './design-types';
import { DesignTypesService } from './design-types.service';

@Component({
  selector: 'app-design-types',
  templateUrl: './design-types.component.html',
  styleUrls: ['./design-types.component.css']
})
export class DesignTypesComponent implements OnInit {
  designTypes: DesignTypes[] = [];
  
  constructor(private designTypesService: DesignTypesService) { }

  ngOnInit() {
    this.getDesignTypes();
  }

  getDesignTypes(): void{
    this.designTypesService.getDesignTypes().subscribe(designTypes => (this.designTypes = designTypes));
  }
}
