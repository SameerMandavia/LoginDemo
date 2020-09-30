import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public headerImgSrc = './assets/images/MacLaptop3.jpg';
  public productImgSrc1 = './assets/images/MacLaptop2.jpg';

  constructor() {
    console.log("Home Module");

  }

  ngOnInit(): void {}
}
