import { Component, OnInit } from '@angular/core';
import { StaticInfo } from "../StaticInfo";

@Component({
  selector: 'myFooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  companyName: string;
  companyLogo: string;
  copyright: string;

  constructor() {
    this.companyName = StaticInfo.getCompanyName();
    this.companyLogo = StaticInfo.getLogo();
    this.copyright = StaticInfo.getCopyright();
  }

  ngOnInit(): void {
  }

}
