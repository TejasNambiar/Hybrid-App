import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"profile",component:ProfileComponent},
  {path:"profileEdit",component:ProfileEditComponent},
  {path:"signup",component:SignupPageComponent},
  {path:"**",component:PageNotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
