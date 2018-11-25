import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { HelloWorldService } from '../../services/hello-world.service';

/**
 * Generated class for the SignUpInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-in',
  templateUrl: 'sign-up-in.html',
})
export class SignUpInPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private loadingCtrl: LoadingController,
    private helloWorldService: HelloWorldService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
    ) {
      if(this.authenticated){
        let message = "You are already logged in"
        let toast = this.toastCtrl.create({
          message: message,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }

  }

  get authenticated(){
    return this.helloWorldService.authenticated;
  }

  usr: { email: string, password: string } = {
		email: '',
		password: ''
  };


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpInPage');
  }

	signIn(){
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		  });		
		  loading.present();
		this.helloWorldService.signIn(this.usr).subscribe((val) => {
      loading.dismiss();
      this.navCtrl.pop();	
		}, (err) => {
			loading.dismiss();
			let alert = this.alertCtrl.create({
				title: 'Error',
				subTitle: 'Invalid email and/or password',
				buttons: ['Ok']
			  });
			  alert.present();			
			console.log(err);
		})
  }
  
  signUp(){
    let message = "Creating your account..."
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    this.helloWorldService.signUp(this.usr).subscribe(()=>{
      message = "Account created with sucess. You are already signed in."
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
      });
      toast.present();				
      this.navCtrl.pop();	

    }, (err) =>{
      message = "An error has ocurred. Try again later."
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
      });
      toast.present();				
      this.navCtrl.pop();				
    });    
  }
}
