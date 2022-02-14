import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/auth-components/login/login.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainBannerComponent } from './components/main/main-banner/main-banner.component';
import { SmallBannerComponent } from './components/main/main-banner/small-banner/small-banner.component';
import { TrendingItemsComponent } from './components/main/trending-items/trending-items.component';
import { HotItemsComponent } from './components/main/hot-items/hot-items.component';
import { MainComponent } from './components/main/main.component';
import { MediumBannerComponent } from './components/main/main-banner/medium-banner/medium-banner.component';
import { ShopHomeListComponent } from './components/main/shop-home-list/shop-home-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    MainBannerComponent,
    SmallBannerComponent,
    TrendingItemsComponent,
    HotItemsComponent,
    MainComponent,
    MediumBannerComponent,
    ShopHomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
