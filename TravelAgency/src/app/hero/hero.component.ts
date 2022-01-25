import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import heroes from '../../assets/json/heroes.json';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, DoCheck {
  heroData: any;
  heroTitle: string;

  constructor(private route: Router) {
    this.heroTitle = "";
  }

  ngOnInit(): void {
    console.log("route url: " + this.route.url);
    console.log("window location href: " + window.location.href);

    this.setHeroData(this.route.url);
    this.colorWord();
  }

  ngDoCheck(): void {
  }

  //gets URL mapping & distills json object
  setHeroData(mappingName: string): void {
    let cleanName: string = mappingName.substring(1);
    // console.log("cleanname: " + cleanName);
    let paramName: string;

    if (cleanName == "") {
      paramName = "home";
    } else {
      paramName = cleanName;
    }

    for (let obj of heroes) {
      // console.log("objpage: " + obj.page);
      // console.log("paramName: " + paramName);
      if (paramName == obj.page) {
        this.heroData = obj;
      }
    }
  }

  colorWord(): void {
    this.heroTitle = this.heroData.title.replace(this.heroData.accent, "<span>" + this.heroData.accent + "</span>");
  }
}