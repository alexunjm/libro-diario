import { Component } from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styles: [`
    h3 {
      color: skyblue
    }
  `]
})
export class ServerComponent {
  sayHello = true;
  response = 'hola';

  answer() {
    this.sayHello = !this.sayHello;
    if (this.sayHello) {
      this.response = 'chao';
    } else {
      this.response = 'hola';
    }
  }
}
