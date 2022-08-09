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
  imageOneName = ''
  imageTwoName = ""
  imageOneStars = 0;
  imageTwoStars = 0;

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
    this.imageOneName = FLOP_DATA[num].title;
    this.imageTwo = FLOP_DATA[num2].imageUrl;
    this.imageTwoName = FLOP_DATA[num2].title;
    this.imageOneStars = FLOP_DATA[num].stars
    this.imageTwoStars = FLOP_DATA[num2].stars
  }

  constructor() { }

  ngOnInit(): void {
    this.findImages()
  }

}
