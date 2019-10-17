import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.scss'],
})
export class CakeDetailComponent implements OnInit {
  currentPopover = null; 
  constructor(
    private popOver: PopoverController
    ) {}
  async presentModal(){
    const modal = await this.popOver.create({
      component: OrderDetailComponent,
      translucent:true
    })
    this.currentPopover = "popover";
    return await modal.present()
  }   
  dismiss(){
    if(this.currentPopover){
      this.currentPopover.dismiss().then(()=>{this.currentPopover = null;})
    }
  }
  ngOnInit() {}

}
