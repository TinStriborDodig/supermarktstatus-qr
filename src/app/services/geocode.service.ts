import {Injectable} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {Observable, of} from "rxjs";
import {fromPromise} from "rxjs/internal-compatibility";
import {map, switchMap, tap} from "rxjs/operators";

declare var google: any;

@Injectable({
    providedIn: 'root'
})
export class GeocodeService {
    private geocoder: any;

    constructor(private mapLoader: MapsAPILoader) {
    }

    private initGeocoder() {
        console.log('Init geocoder!');
        this.geocoder = new google.maps.Geocoder();
    }

    private waitForMapsToLoad(): Observable<boolean> {
        if (!this.geocoder) {
            return fromPromise(this.mapLoader.load())
                .pipe(
                    tap(() => this.initGeocoder()),
                    map(() => true)
                );
        }
        return of(true);
    }

    geocodeAddress(location: string): Observable<Coordinate> {
        console.log('Start geocoding!');
        return this.waitForMapsToLoad().pipe(
            // filter(loaded => loaded),
            switchMap(() => {
                return new Observable<Coordinate>(observer => {
                    this.geocoder.geocode({'address': location}, (results, status) => {
                        if (status == google.maps.GeocoderStatus.OK) {
                            console.log('Geocoding complete!');
                            observer.next({
                                latitude: results[0].geometry.location.lat(),
                                longitude: results[0].geometry.location.lng()
                            });
                        } else {
                            console.log('Error - ', results, ' & Status - ', status);
                            observer.next({latitude: 0, longitude: 0});
                        }
                        observer.complete();
                    });
                })
            })
        )
    }

}

export class Coordinate {
    latitude;
    longitude;

    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

}