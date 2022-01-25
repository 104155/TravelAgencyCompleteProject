import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  cards: any = [{
    title: "Yo! Look at our trip!",
    date: "23.06.2018",
    location: "Austrian Alps",
    image: "../../assets/img/pexelsBlogCamping.jpeg"
  }, {
    title: "Greetings from Sweden!",
    date: "12.03.2019",
    location: "Estocolmo",
    image: "../../assets/img/pexelsBlogSweden.jpeg"
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
