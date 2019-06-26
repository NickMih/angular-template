import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  toHome = () => {
    this.router.navigateByUrl('/');
  }

  toAbout = () => {
    this.router.navigateByUrl('about');
  }

  toTariffs = () => {
    this.router.navigateByUrl('tarrifs');
  }
}
