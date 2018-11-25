import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelloWorldService } from '../../services/hello-world.service';

/**
 * Generated class for the SignOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-out',
  templateUrl: 'sign-out.html',
})
export class SignOutPage {
  signedOut = false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private helloWorldService: HelloWorldService
    ) {
    if(this.authenticated){
      this.helloWorldService.signOut().subscribe((val) => {
        this.signedOut = true;
        this.navCtrl.pop();
      });   
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignOutPage');
  }

  get authenticated(){
    return this.helloWorldService.authenticated;
  }

}
