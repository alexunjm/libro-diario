import { EventEmitter } from '@angular/core'

export class LoggingService {

  message = new EventEmitter<string>();

  log(msg: string) {
    console.log(msg);
  }
}
