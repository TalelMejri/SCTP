import { Component, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

   @Input() link:String="Dashboard";
   @Input() public isSidebarOpen=false;
   @Output() changerlink=new EventEmitter<string>();

   changeLink(newLink: string) {
    this.link = newLink;
    this.changerlink.emit(newLink); 
  }
}
