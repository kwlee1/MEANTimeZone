import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  today = null; 
  tz = null; 
  timeZone(zone){
    this.today = new Date(); 
    this.tz = zone; 
    if(zone===null){
      this.today = null; 
    }
  }
  
}
