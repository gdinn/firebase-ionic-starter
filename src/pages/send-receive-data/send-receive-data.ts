import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { HelloWorldService } from '../../services/hello-world.service';

/**
 * Generated class for the SendReceiveDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-receive-data',
  templateUrl: 'send-receive-data.html',
})
export class SendReceiveDataPage {
  sentData: any;
  toSend = {
    title: '',
    msg: ''
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private helloWorldService: HelloWorldService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    
    ) {
    this.getData();
  }

  getData(){
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});		
		loading.present();    
    this.helloWorldService.getData().subscribe((res) => {
      this.sentData = null;
      this.sentData = new Array();
      res.forEach(snapshot => {
        this.sentData.push(snapshot.val());
      });      
      loading.dismiss();
    }, (err) => {
      loading.dismiss();
    });    
  }

  sendData(){
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});		
		loading.present();        
    this.helloWorldService.sendData(this.toSend).subscribe((res) => { 
      loading.dismiss();
      let message = "Sucess"
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.getData();     
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendReceiveDataPage');
  }

}
