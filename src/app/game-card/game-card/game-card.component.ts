import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from 'src/app/game-card/interfaces/card-data.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styles: [
  ]
})
export class GameCardComponent implements OnInit {
  
  @Input() data!: CardData;
  
  @Output() cardClicked = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
