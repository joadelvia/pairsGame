import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './game-card/game-card.component';

import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';



@NgModule({
  declarations: [ GameCardComponent, RestartDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GameCardComponent,
    RestartDialogComponent
  ]
})
export class GameCardModule { }
