import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
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
import { HeaderComponent } from './components/header/header.component';
import { OrdersModalComponent } from './components/orders-modal/orders-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusinessAccountComponent } from './pages/business-account/business-account.component';
import { RestourantComponent } from './components/business-account/restourant/restourant.component';
import { IntegrationComponent } from './components/business-account/integration/integration.component';
import { MenuComponent } from './components/business-account/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CardModalComponent } from './components/card-modal/card-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MealCardComponent,
    PromoDescriptionComponent,
    MealComponent,
    HomeComponent,
    InformationComponent,
    OrdersComponent,
    PaymentsComponent,
    OrdersModalComponent,
    BusinessAccountComponent,
    RestourantComponent,
    IntegrationComponent,
    MenuComponent,
    CardModalComponent,
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}

