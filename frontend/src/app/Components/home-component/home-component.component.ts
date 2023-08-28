import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  index_image:number=0;
   panelOpenState = false;
  test(i:number){
    this.index_image=i;
  }
  
   imageUrls = [
    "../../../assets/images/img1.jpg",
    "../../../assets/images/img2.jpg",
    "../../../assets/images/img3.jpg",
  ];
}
