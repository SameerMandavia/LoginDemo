import { Component, OnInit } from '@angular/core';


/**
 * Page not found Component.
 * @author Sameer Mandavia.
 * 
 */
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {    console.log("PageNotFound Module");
}

  ngOnInit(): void {}
}
