import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {
  company = '源拓源律所';
  address = '江苏省无锡市';
  hotline = '4001-185-185';
  icp = '京ICP备11017069号-5';
  about_url = '#';

  constructor() { }

  ngOnInit() {
  }

}
