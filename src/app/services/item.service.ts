import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

// Firestore
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

// Interface
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;

  items: Observable<Item[]>;

  constructor(public firestore: AngularFirestore) { }
}
