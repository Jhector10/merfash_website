import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  FormData!: FormGroup;
  constructor(private builder: FormBuilder) { }
  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phonenumber: new FormControl('', [Validators.required]),
      Location: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required])
    });
    AOS.init();
  }
  
  onSubmit(FormData: any) {
  }
}


