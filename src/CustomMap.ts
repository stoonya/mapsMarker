export interface Mappable {
  getName(): string;
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor (element: Element) {
    this.googleMap = new google.maps.Map(element, {
      zoom: 2,
      minZoom: 2,
      maxZoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.getName(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
