import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css']
})
export class ScheduleAppointmentComponent implements OnInit {
  onSubmit(arg0: any) {
    throw new Error('Method not implemented.');
    }
    
      FormData!: FormGroup;
      constructor(private builder: FormBuilder) { }
      ngOnInit() {
        this.FormData = this.builder.group({
          Fullname: new FormControl('', [Validators.required]),
          Email: new FormControl('', [Validators.required, Validators.email]),
          Phonenumber: new FormControl('', [Validators.required]),
        })
      }
    

}
