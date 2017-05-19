import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  template: `
    <div class="app-server" appColor *ngFor="let server of servers"></div>
    <div class="app-server" appBold [ngStyle]="{color: i%2==0 ? 'gray': 'violet'}" *ngFor="let server of servers; let i = index"></div>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers = [
    'server1',
    'server2',
    'server3',
  ];

  constructor() { }

  ngOnInit() {
  }

}
