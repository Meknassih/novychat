import { Component } from '@angular/core';
import * as Parse from 'parse';
import {environment} from "../environments/environment";

@Component({
  selector: 'novy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'novychat';

  constructor() {
    // Initialize Parse App Keys
    Parse.initialize(environment.parseApiKey, environment.parseJsKey);
    Parse.serverURL = environment.parseServerUrl;
  }
}
