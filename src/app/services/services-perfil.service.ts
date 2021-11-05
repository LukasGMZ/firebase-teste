import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Storage } from '@capacitor/storage';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';
 
export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class ServicesPerfilService {
  emailValue = new BehaviorSubject({});
  emailCollection: AngularFirestoreCollection;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.emailCollection = this.afs.collection('emails');
  }

  async emailCadastro({ email }): Promise<any> {
    this.afs.collection('emails').add(this.emailValue.value);
  }
}