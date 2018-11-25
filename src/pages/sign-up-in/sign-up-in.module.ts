import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpInPage } from './sign-up-in';
import { HelloWorldService } from '../../services/hello-world.service';

@NgModule({
  declarations: [
    SignUpInPage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpInPage),
  ],
  providers: [
    HelloWorldService
  ]
})
export class SignUpInPageModule {}
