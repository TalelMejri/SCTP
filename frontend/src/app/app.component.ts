
import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mode:string="nightlight_round";
  
  toggle(event:MatSlideToggleChange){
    this.mode=event.checked ? "light_mode" : "nightlight_round";
    if(this.mode=="light_mode"){
      document.body.classList.add('them_dark');
      document.body.classList.remove('them_light');
    }else{
      document.body.classList.add('them_light');
      document.body.classList.remove('them_dark');
    }
  }

  title = 'frontend';

}
