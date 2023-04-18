import { ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { PromoDescriptionComponent } from './components/promo-description/promo-description.component';
import { MealComponent } from './components/meal/meal.component';
import { ModalComponent } from './components/modal/modal.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MealCardComponent,
    PromoDescriptionComponent,
    MealComponent,
    ModalComponent,
    HomeComponent,
    InformationComponent,
    OrdersComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

