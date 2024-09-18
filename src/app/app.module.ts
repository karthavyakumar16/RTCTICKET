import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BustypeComponent } from './bustype/bustype.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListofbusesComponent } from './listofbuses/listofbuses.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BustypeComponent,
    SeatselectionComponent,
    PaymentdetailsComponent,
    ListofbusesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  HttpClientModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
  

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
