import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { SeniboxComponent } from './components/senibox/senibox.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { RegistrarmeComponent } from './components/registrarme/registrarme.component';
import { CourierInternacionalComponent } from './components/servicios/courier-internacional/courier-internacional.component';
import { TransporteCargaInternacionalComponent } from './components/servicios/transporte-carga-internacional/transporte-carga-internacional.component';
import { TramitesAduanerosLogisticaComponent } from './components/servicios/tramites-aduaneros-logistica/tramites-aduaneros-logistica.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { AdvancedMarkerDirective } from './directives/advanced-marker.directive';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreNosotrosComponent,
    SeniboxComponent,
    ContactoComponent,
    MiCuentaComponent,
    RegistrarmeComponent,
    CourierInternacionalComponent,
    TransporteCargaInternacionalComponent,
    TramitesAduanerosLogisticaComponent,
    AdvancedMarkerDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    GoogleMapsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
