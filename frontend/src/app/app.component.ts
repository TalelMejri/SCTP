
import { Component,OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  mode:string="nightlight_round";
  showModeAdmin:Boolean=false;
  ngOnInit(): void {
    this.showModeAdmin=localStorage.getItem("ModeAdmin")=="true" ? true : false;
  }
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
