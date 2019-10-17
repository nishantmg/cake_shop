import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const cakes : Routes=[
    {
        path:'cake-detail',
        component: CakeDetailComponent
    },
    {
        path:'cart',
        component:CartComponent
    },
    {
        path:'order-detail',
        component:OrderDetailComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(cakes)
    ],
    exports:[
        [RouterModule]
    ]
})

export class CakeRoutingModule { } 