import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TobePage } from './tobe';

@NgModule({
  declarations: [
    TobePage,
  ],
  imports: [
    IonicPageModule.forChild(TobePage),
  ],
})
export class TobePageModule {}
