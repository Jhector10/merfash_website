import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DesignTypesComponent } from './homepage/design-types/design-types.component';
import { ScheduleBtnComponent } from './homepage/schedule-btn/schedule-btn.component';
import { TestimonialsComponent } from './homepage/testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { InstagramComponent } from './homepage/instagram/instagram.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DesignsComponent } from './designs/designs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';

@NgModule({
  declarations: [								
    AppComponent,
      TopNavComponent,
      HomepageComponent,
      DesignTypesComponent,
      ScheduleBtnComponent,
      TestimonialsComponent,
      FooterComponent,
      InstagramComponent,
      AboutComponent,
      PrivacyPolicyComponent,
      DesignsComponent,
      ContactUsComponent,
      ScheduleAppointmentComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component: HomepageComponent},
      {path:'about', component: AboutComponent},
      {path:'privacy-policy', component: PrivacyPolicyComponent},
      {path:'designs', component: DesignsComponent},
      {path:'contact-us', component: ContactUsComponent},
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
