import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class ServerList {

  public servers = [
    'server1',
    'server2',
    'server3',
  ];

  constructor(public logServ: LoggingService) {
    logServ.message.subscribe(
      (msg: string) => logServ.log(msg)
    );
  }

  addServer(serverName: string) {
    this.servers.push(serverName);
    this.logServ.log('server added: ' + serverName);
  }
}
