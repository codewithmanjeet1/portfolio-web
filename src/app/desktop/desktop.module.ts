import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomeComponent,
    SkillsComponent
  ]
})
export class DesktopModule { }
