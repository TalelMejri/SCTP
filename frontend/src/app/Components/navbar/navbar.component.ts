import { Component,Input,Output,EventEmitter} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   isChecked=false;
   @Input() modeCurrent:string="nightlight_round";

   @Output() changeMode=new EventEmitter<MatSlideToggleChange>();


}
