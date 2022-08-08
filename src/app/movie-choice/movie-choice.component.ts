import { FLOP_DATA } from './../movies';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-movie-choice',
  templateUrl: './movie-choice.component.html',
  styleUrls: ['./movie-choice.component.css']
})
export class MovieChoiceComponent implements OnInit {

  imageOne: string = ''
  imageTwo: string = ''

  findImages(): void {
    let num2 = -1;
    let num = Math.floor(Math.random() * FLOP_DATA.length)

    if(num2 < 0){
      let random = Math.floor(Math.random() * FLOP_DATA.length)
      while(random === num){
        random = Math.floor(Math.random() * FLOP_DATA.length)
      }
      num2 = random
    }

    this.imageOne = FLOP_DATA[num].imageUrl;
    this.imageTwo = FLOP_DATA[num2].imageUrl;
  }

  constructor() { }

  ngOnInit(): void {
    this.findImages()
  }

}
