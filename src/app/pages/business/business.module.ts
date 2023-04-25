import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';


@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    FooterComponent,
    ModalComponent
  ]
})
export class BusinessModule { }
