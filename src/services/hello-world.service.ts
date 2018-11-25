
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {
  authState: any = null;

 	constructor(
 		private afAuth: AngularFireAuth
 	) {
 		this.afAuth.authState.subscribe((auth) => {
 			this.authState = auth
 		});
 	}

 	signIn(loginForm: any): Observable<any>{
 		let email = loginForm.email;
 		let password = loginForm.password;
 		return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password));

 	}

 	signUp(signUpForm: any): Observable<any>{
 		let email = signUpForm.email;
 		let password = signUpForm.password;
 		return Observable.fromPromise(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
 	}

  signOut(): void {
    this.afAuth.auth.signOut();
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }  
 }
