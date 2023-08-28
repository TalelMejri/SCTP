import { Component } from '@angular/core';

@Component({
  selector: 'app-nos-marque-comp',
  templateUrl: './nos-marque-comp.component.html',
  styleUrls: ['./nos-marque-comp.component.scss']
})
export class NosMarqueCompComponent {

  marques:any[]=[
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png",
    "../../../../assets/logo.png"
  ];

  scroolto(i:number){
   const cardelement=document.getElementsByClassName('marque')[i] as HTMLElement;
    if(cardelement){
      cardelement.scrollIntoView({behavior:'smooth',inline:'center'});
  }
}

}
