/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
 import { Component, OnInit } from '@angular/core';
//  import { AnalyticsService } from './../';
 
@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'angular-frontend';
    
  // constructor(private analytics: AnalyticsService) {
  constructor() {
  }

  ngOnInit(): void {
    // this.analytics.trackPageViews();
  }
}
