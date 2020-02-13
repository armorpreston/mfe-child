import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'kidA';

  @Input() public outerRoute: any;

  public ngOnChanges(c) {
    console.log(c);
  }
}
