import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  @ViewChild(GoogleMap) googleMap!: GoogleMap;

  center: google.maps.LatLngLiteral = { lat: -2.161944, lng: -79.904639 };
  zoom = 15;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  };

  ngAfterViewInit() {
    if(this.googleMap) {
      this.addMarker();
    }
  }

  addMarker() {
    const marker = new google.maps.Marker({
      position: this.center,
      map: this.googleMap.googleMap!,
      title: 'SENIBOX',
    })

    marker.addListener('click', ()=> {
      window.open(`https://maps.google.com/?q=${this.center.lat},${this.center.lng}`, '_blank');
    })
  }
}
