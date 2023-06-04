import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DesignTypesComponent } from './homepage/design-types/design-types.component';
import { ScheduleBtnComponent } from './homepage/schedule-btn/schedule-btn.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 

@NgModule({
  declarations: [		
    AppComponent,
      TopNavComponent,
      HomepageComponent,
      DesignTypesComponent,
      ScheduleBtnComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCarouselModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
