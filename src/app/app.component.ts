import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

// import protocolCheck from 'custom-protocol-detection';
// const protocolCheck = require('custom-protocol-detection');

declare const require: any; // Squash error: Cannot find name 'require'
const protocolCheck = require('3rd-party/protocolcheck');

// import * as lowerCase from 'lowerCase';
// const lowerCase = require('lower-case');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app2';

  ngOnInit() {
    // const org = 'UPPER-CASE';
    // const xyzzy = lowerCase(org);
    // tslint:disable-next-line:no-console
    // console.info(org + '  - ' + xyzzy);
  }

  testValid() {
    this.callProtocolCheck('qz:launch');
  }

  testInValid() {
    this.callProtocolCheck('zz:launch');
  }

  callProtocolCheck(customUri) {


    console.log(customUri);

    // (window as any).
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


