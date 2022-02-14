import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', usual way to use a component
  //selector: '.app-servers', adding this component by class
  selector: '[app-servers]',  //using a component by property
  //you can use template instead of templateUrl to write the html, use it only if the html is shot ``for many lines ''only one line html
  //template: `<p>servers works with template!</p>
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styles: [`
    p {
      color: blue;
    }`
  ] 
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  newServer = "server not created";
  serverName = "";

  constructor() { 
    setTimeout(() => {this.allowNewServer = true}, 2000);
  }

  ngOnInit(): void {
  }

  createServer() {
    this.newServer = "Server Created!!";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
