import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BustypeComponent } from './bustype/bustype.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { ListofbusesComponent } from './listofbuses/listofbuses.component';

const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'bustype',component:BustypeComponent},
  {path:'seatselection',component:SeatselectionComponent},
  {path:'paymentdetails',component:PaymentdetailsComponent},
  {path:'listofbuses',component:ListofbusesComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
