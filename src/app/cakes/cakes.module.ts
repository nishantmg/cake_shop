import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeRoutingModule } from './cake-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';



@NgModule({
  declarations: [
    CakeDetailComponent,
    CartComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    CakeRoutingModule,
    SharedModule
  ]
})
export class CakesModule { }
