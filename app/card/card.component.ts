import { Component, OnInit } from '@angular/core';
import { Card } from './card'
import { CardService } from './service/card.service';

@Component({
  selector: 'card',
  templateUrl : 'app/card/card.component.html' 
})
export class CardComponent implements OnInit {
    
  cards: Card[];
  constructor(private cardService: CardService) {}

   ngOnInit() {
      this.cardService.getCards().then(cards => this.cards = cards);
    }
}

