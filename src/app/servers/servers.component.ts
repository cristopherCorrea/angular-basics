import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //you can use template instead of templateUrl to write the html, use it only if the html is shot ``for many lines ''only one line html
  template: `<p>servers works with template!</p>
  <app-server></app-server>`,
  styles: [`
    p {
      color: blue;
    }`
  ] 
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
