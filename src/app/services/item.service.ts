import { Injectable } from '@angular/core';

// Firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

// Interface
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;

  constructor(public firestore: AngularFirestore) { }
}
