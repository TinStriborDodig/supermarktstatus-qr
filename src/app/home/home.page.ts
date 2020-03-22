import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService, Message} from '../services/data.service';
import {AngularFirestore} from '@angular/fire/firestore';


import {ActivatedRoute} from "@angular/router";
import {Supermarket} from "../supermarket";
import {Product} from "../product";
import {SupermarketDistanceService} from "../services/supermarket-distance.service";
import {map, refCount} from "rxjs/operators";


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public supermarket: Supermarket;


    public products: Product[];
    public id: any;
    distance: string;

    constructor(private data: DataService, private firestore: AngularFirestore,
                private route: ActivatedRoute,
                private supermarketDistanceService: SupermarketDistanceService,
                private cdr: ChangeDetectorRef) {

        this.id = this.route
            .snapshot
            .paramMap
            .get("id");

    }

    ngOnInit(): void {
        this.firestore.doc<Supermarket>("supermarkets/" + this.id)
            .valueChanges()
            .subscribe(result => {
                this.supermarket = result;
                this.retrieveDistanceToMarket()
                    .pipe(refCount())
                    .subscribe(distance => {
                        this.distance = distance;
                        this.cdr.detectChanges();
                    });
            });


        this.firestore.collection<Product>("supermarkets/" + this.id + "/products")
            .valueChanges()
            .subscribe(result => this.products = result);
    }

    retrieveDistanceToMarket() {
        return this.supermarketDistanceService
            .getCurrentDistanceTo(this.supermarket)
            .pipe<string>(
                map(distance => this.formatDistance(distance))
            );
    }


    private formatDistance(distance: number) {
        if (distance >= 10) {
            return distance
                .toFixed(0)
                .toLocaleString() + ' km entfernt';
        } else if (distance < 10 && distance >= 1) {
            return distance
                .toFixed(1)
                .toLocaleString() + ' km entfernt';
        } else if (distance < 1) {
            return (distance * 1000)
                .toFixed(0)
                .toLocaleString() + ' m entfernt';
        }
    }

    refresh(ev) {
        setTimeout(() => {
            ev.detail.complete();
        }, 3000);
    }

    getMessages()
        :
        Message[] {
        return this.data.getMessages();
    }

}
