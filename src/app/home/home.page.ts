import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';


import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public supermarket: any;
  public products: any;
  public id: any;

  constructor(private data: DataService, private firestore: AngularFirestore, private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get("id");
     this.firestore.doc("supermarkets/"+this.id).valueChanges().subscribe(result => {
       console.log(result)
       this.supermarket = result;
     });


     this.firestore.collection("supermarkets/"+this.id+"/products").valueChanges().subscribe(result => {
      console.log(result)
      this.products = result;
    });
       
  
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
