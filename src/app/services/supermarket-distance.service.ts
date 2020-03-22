import {Injectable, OnInit} from '@angular/core';
import {combineLatest, from, Observable} from "rxjs";
import {Supermarket} from "../supermarket";
import {map} from "rxjs/operators";
import {Geolocation} from "@capacitor/core";
import {Coordinate, GeocodeService} from "./geocode.service";

@Injectable({
    providedIn: 'root'
})
export class SupermarketDistanceService implements OnInit {
    constructor(private geocodeService: GeocodeService) {

    }


    ngOnInit(): void {

    }

    getCurrentDistanceTo(supermarket: Supermarket) {
        return combineLatest([this.retrieveOwnLocation(), this.retrieveSupermarketLocation(supermarket)])
            .pipe(
                map(([ownLocation, supermarketLocation]) => SupermarketDistanceService.haversineDistance(ownLocation, supermarketLocation))
            )
    }

    retrieveSupermarketLocation(supermarket: Supermarket): Observable<Coordinate> {
        return this.geocodeService.geocodeAddress(supermarket.location);

    }

    retrieveOwnLocation(): Observable<Coordinate> {
        return from(Geolocation.getCurrentPosition())
            .pipe(
                map(loc => new Coordinate(loc.coords.latitude, loc.coords.longitude))
            );
    }

    private static haversineDistance(from: Coordinate, to: Coordinate): number {
        const earthRadiusInKm = 6371.0710;
        const rlat1 = from.latitude * (Math.PI / 180);
        const rlat2 = to.latitude * (Math.PI / 180);
        const difflat = rlat2 - rlat1;
        const difflon = (to.longitude - from.longitude) * (Math.PI / 180);

        return 2 * earthRadiusInKm * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2)
            + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
    }
}


