import { HttpErrorResponse } from '@angular/common/http'
import { Component, Input, OnInit } from '@angular/core'
import { icon, latLng, Map, MapOptions, Marker, tileLayer } from 'leaflet'
import { COUNTRIES_LAT_LNG } from 'src/app/helpers/countries-lat-lng'
import { CountryObject } from 'src/app/models/random-user.model'
import { SearchLatitudeLongitudeService } from 'src/app/services/search-lat-lng.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  isLoading: boolean

  @Input() initials: string
  @Input() address: string
  country: CountryObject = {} as CountryObject

  mapOptions: MapOptions
  map: Map

  constructor(
    private latitudeLongitudeService: SearchLatitudeLongitudeService
  ) { }

  ngOnInit(): void {
    this.loadMethods()
  }

  async loadMethods(): Promise<void> {
    this.isLoading = true
    await Promise.resolve(this.getLatitudeLongitudeByAddress(this.address))
    this.isLoading = false
  }

  async getLatitudeLongitudeByAddress(address: string): Promise<void> {
    return this.latitudeLongitudeService.getLatitudeLongitude(address)
      .toPromise()
      .then(
        success => {
          this.formatSuccess(success)
          this.initializeMapOptions()
        },
        (err: HttpErrorResponse) => console.error(err),
      )
  }

  formatSuccess(response: any): void {
    response.length
      ? (
        this.country.latitude = Number(response[0].lat),
        this.country.longitude = Number(response[0].lon)
      )
      : this.getLatLngByCountry(this.initials)
  }

  getLatLngByCountry(initial: string): void {
    const foundCountry =
      COUNTRIES_LAT_LNG.find(country => country.initials === initial)

    foundCountry && (this.country = foundCountry)
  }


  initializeMapOptions(): void {
    this.mapOptions = {
      center: latLng(this.country.latitude, this.country.longitude),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    }
  }

  addSampleMarker(): void {
    const marker = new Marker([this.country.latitude, this.country.longitude])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/marker-icon.png'
        }))
    marker.addTo(this.map)
  }

  onMapReady(map: Map): void {
    this.map = map
    this.addSampleMarker()
  }
}
