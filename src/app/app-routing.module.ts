import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "dashboard", loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule), canActivate: [AuthGuard]},
  { path: 'business', loadChildren: () => import('./pages/business/business.module').then(m => m.BusinessModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }