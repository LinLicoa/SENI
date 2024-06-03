import { Directive, Input, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Directive({
  selector: '[appAdvancedMarker]'
})
export class AdvancedMarkerDirective implements OnInit {
  @Input() position!: google.maps.LatLngLiteral;
  @Input() map!: GoogleMap;

  ngOnInit() {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: this.position,
      map: this.map.googleMap, // Ajustamos para usar el mapa interno
    });

    // Agregar un listener de clic para navegar a la ubicación
    marker.addListener('click', () => {
      window.open(`https://maps.google.com/?q=${this.position.lat},${this.position.lng}`, '_blank');
    });
  }
}
