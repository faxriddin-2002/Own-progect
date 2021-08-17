import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './first-page/home/home.component';
import { CompanyComponent } from './first-page/home/company/company.component';
import { HomepageComponent } from './first-page/home/homepage/homepage.component';
import { AboutComponent } from './About Us/about/about.component';
import { AcountComponent } from './Acount/acount.component';
import { ContactComponent } from './Contact Us/contact/contact.component';
import { RegistrationComponent } from './Registration/registration.component';
import { CardService } from './first-page/home/card.service';
import { FormsService } from './Registration/forms.service';
import { MenuComponent } from "./menu/menu.component";
import { MenuHomepageComponent } from "./menu/menu-homepage/menu-homepage.component";;
import { MenuInnerComponent } from "./menu/menu-inner/menu-inner.component";
import { MenuService } from "./menu/menu.service"



const go =[
  {path: '', component: HomeComponent},
  {path: 'About-Us', component: AboutComponent},
  {path: 'Contact-Us', component: ContactComponent},
  {path: 'Registration', component: RegistrationComponent},
  {path: 'Acount', component: AcountComponent},
  {path: 'Menu', component: MenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    HomepageComponent,
    AboutComponent,
    AcountComponent,
    ContactComponent,
    RegistrationComponent,
    MenuComponent,
    MenuHomepageComponent,
    MenuInnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(go)
  ],
  providers: [CardService, FormsService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
