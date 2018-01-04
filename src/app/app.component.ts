import { Component } from '@angular/core';
import protocolCheck from 'custom-protocol-detection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';

  testValid() {
    this.callProtocolCheck('qz:launch');
  }

  testInValid() {
    this.callProtocolCheck('zz:launch');
  }

  callProtocolCheck(customUri) {

    console.log(customUri);

    protocolCheck(customUri,
      () => {
        console.log('This browser does not support the protocol');
      },
      () => {
        console.log('This browser supports the protocol');
      },
      () => {
        console.log('This browser does not provide a method to detect protocol support');
      });

  }
}


