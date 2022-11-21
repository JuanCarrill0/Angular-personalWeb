import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibleMain: boolean =true;
  visibleProjects: boolean=false;


  showProjects() {
    this.visibleMain = this.visibleMain?false:true;
    this.visibleProjects = this.visibleProjects?false:true;
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }

}
