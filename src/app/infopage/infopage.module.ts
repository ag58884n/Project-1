import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopagePageRoutingModule } from './infopage-routing.module';

import { InfopagePage } from './infopage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopagePageRoutingModule
  ],
  declarations: [InfopagePage]
})
export class InfopagePageModule {}
