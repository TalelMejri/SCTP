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
  
  scrollToCard(cardIndex: number) {
    const cardElement = document.getElementsByClassName('box')[cardIndex] as HTMLElement;
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }
  
   Produits=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
   
   imageUrls = [
    "../../../assets/images/img1.jpg",
    "../../../assets/images/img2.jpg",
    "../../../assets/images/img3.jpg",
  ];
}
