import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-comp',
  templateUrl: './sign-up-comp.component.html',
  styleUrls: ['./sign-up-comp.component.scss']
})
export class SignUpCompComponent {
  codeSec:string=Math.random().toString(36).substring(2,8) + Math.random().toString(36).substring(2, 2);
  anotherCode(){
    this.codeSec=Math.random().toString(36).substring(2,8) + Math.random().toString(36).substring(2, 2);
  }
}
