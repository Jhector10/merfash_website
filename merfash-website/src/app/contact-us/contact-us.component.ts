import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  FormData!: FormGroup;
  fullname = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phonenumber = new FormControl('', [Validators.required]);
  location = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
  myScriptElement!: HTMLScriptElement;
  constructor(private builder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: this.fullname,
      Email: this.email,
      Phonenumber: this.phonenumber,
      Location: this.location,
      Message: this.message,
    });
    AOS.init();
  }
  onSubmit(FormData: any) {
    let mail = {
      fullname: this.fullname.value,
      email: this.email.value,
      phonenumber: this.phonenumber.value,
      location: this.location.value,
      message: this.message.value,
    };

    if (
      !mail.fullname ||
      !mail.email ||
      !mail.phonenumber ||
      !mail.location ||
      !mail.message
    ) {
      alert('One of the fields are missing');
    } else {
      emailjs.init("xf8PlghLHzySotVOq");
      emailjs.send("service_s2lpli9", "template_ysr442s", {
        from_name: mail.fullname,
        to_name: "Mercedes Santana",
        message: mail.message,
        location: mail.location,
        phonenumber: mail.phonenumber,
        from_email: mail.email,
        to_email: "merfashdesigner77@gmail.com", //change to Mercedes' email
        reply_to: mail.email,
      });
      alert('Your message has been set to merfashdesigner77@gmail.com');
      this.FormData.reset();
    }

  }
}
