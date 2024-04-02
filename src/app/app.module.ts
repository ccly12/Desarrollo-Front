import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';                     //curso-tdapp/angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TemplateComponent } from './components/template/template.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';






@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    PageNotFoundComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //curso-tdapp/angular
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule
    
    
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
