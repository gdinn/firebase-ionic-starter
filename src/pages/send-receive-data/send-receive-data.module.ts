import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendReceiveDataPage } from './send-receive-data';

@NgModule({
  declarations: [
    SendReceiveDataPage,
  ],
  imports: [
    IonicPageModule.forChild(SendReceiveDataPage),
  ],
})
export class SendReceiveDataPageModule {}
