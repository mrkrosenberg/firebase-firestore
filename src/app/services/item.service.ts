import { Injectable } from '@angular/core';

// Firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection;

  constructor(public firestore: AngularFirestore) { }
}
