import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { VerificationComponent } from './verification/verification.component';


const routes: Routes = [
    
    {path:"home",component:HomeComponent},
    {path: '', redirectTo: '/register-user', pathMatch: 'full'},
    {path:"register-user", component:RegisterUserComponent},
    {path:"verification",component:VerificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
