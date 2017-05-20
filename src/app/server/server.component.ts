import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styles: [`
    h3 {
      color: skyblue
    }
    .grande {
      font-size: x-large;
    }
  `]
})
export class ServerComponent {
  sayHello = true;
  response = 'hola';
  colors = ['red', 'blue', 'orange'];
  color = 'white';

  constructor(ls: LoggingService) {
    this.randomColor();
    ls.message.emit('new server' + Math.random());
  }

  answer() {
    this.sayHello = !this.sayHello;
    if (this.sayHello) {
      this.response = 'chao';
    } else {
      this.response = 'hola';
    }
  }

  randomColor() {
    const index = Math.floor(Math.random() * (this.colors.length - 1));
    this.color = this.colors[index];
  }

  coloreame() {
    return this.colors[this.colors.indexOf(this.color) + 1];
  }

  esRojo() {
    return this.color === 'red';
  }
}
