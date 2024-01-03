import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [

{
  path:'',
  component: HomeComponent,
  pathMatch:"full",
},


{
  path:'navbar',
  component: NavbarComponent,
  pathMatch:"full",
},
{
  path:'footer',
  component: FooterComponent,
  pathMatch:"full",
},
{
  path:'about',
  component: AboutComponent,
  pathMatch:"full",
},
{
  path:'contact',
  component: ContactComponent,
  pathMatch:"full",
},
{
  path:'resume',
  component: ResumeComponent,
  pathMatch:"full",
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
