import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { SeniboxComponent } from './components/senibox/senibox.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { RegistrarmeComponent } from './components/registrarme/registrarme.component';
import { CourierInternacionalComponent } from './components/servicios/courier-internacional/courier-internacional.component';
import { TransporteCargaInternacionalComponent } from './components/servicios/transporte-carga-internacional/transporte-carga-internacional.component';
import { TramitesAduanerosLogisticaComponent } from './components/servicios/tramites-aduaneros-logistica/tramites-aduaneros-logistica.component';

const routes: Routes = [
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'senibox', component: SeniboxComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'mi-cuenta', component: MiCuentaComponent },
  { path: 'registrarme', component: RegistrarmeComponent },
  { path: 'servicios/courier-internacional', component: CourierInternacionalComponent },
  { path: 'servicios/transporte-carga-internacional', component: TransporteCargaInternacionalComponent },
  { path: 'servicios/tramites-aduaneros-logistica', component: TramitesAduanerosLogisticaComponent },
  { path: '', redirectTo: '/sobre-nosotros', pathMatch: 'full' },
  { path: '**', redirectTo: '/sobre-nosotros' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
