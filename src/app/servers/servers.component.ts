import { Component, OnInit } from '@angular/core';
import { ServerList } from '../services/server-list.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: '[app-servers]',
  template: `
    <div class="app-server" appColor *ngFor="let server of servers"></div>
    <div class="app-server" appBold [ngStyle]="{color: i%2==0 ? 'gray': 'violet'}" *ngFor="let server of servers; let i = index"></div>
    <button (click)="add()">add</button>`,
  styleUrls: ['./servers.component.css'],
  providers: [ServerList, LoggingService]
})
export class ServersComponent implements OnInit {

  servers: any[];

  constructor(public sl: ServerList) {
    this.servers = sl.servers;
  }

  ngOnInit() {
  }

  add() {
    this.sl.addServer('server' + this.servers.length);
  }

}
