
import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isChecked=false;
  mode:string="nightlight_round";

  toggle(event:MatSlideToggleChange){
    this.mode=event.checked ?  "light_mode" : "nightlight_round";
    document.body.classList.toggle('them_dark');
  }

  title = 'frontend';

}
