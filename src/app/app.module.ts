import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ProductComponent,
    ProductsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC28knnfGr2OTBPE9w02acJLDiKxcw3ZGw',
    }),
    AgmSnazzyInfoWindowModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
