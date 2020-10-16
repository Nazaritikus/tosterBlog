import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {SettingComponent} from './setting.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: SettingComponent}])
  ]
})
export class SettingModule { }
