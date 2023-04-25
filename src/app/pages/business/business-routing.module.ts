import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business.component';
import { BusinessAccountComponent } from '../business-account/business-account.component';
import { InformationComponent } from 'src/app/components/business-account/information/information.component';
import { RestourantComponent } from 'src/app/components/business-account/restourant/restourant.component';
import { IntegrationComponent } from 'src/app/components/business-account/integration/integration.component';
import { MenuComponent } from 'src/app/components/business-account/menu/menu.component';
import { CardModalComponent } from 'src/app/components/card-modal/card-modal.component';

const routes: Routes = [
  { path: '', component: BusinessComponent },
  { 
    path: "account", component: BusinessAccountComponent,
    children: [
      { path: "information", component: InformationComponent },
      { path: "restourant", component: RestourantComponent },
      { path: "integration", component: IntegrationComponent },
      { path: "menu", component: MenuComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
